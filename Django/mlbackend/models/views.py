from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.decorators import permission_required
from django.template import Context, loader
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from django.http import JsonResponse
from django.contrib import messages
from django.contrib.auth.decorators import permission_required
from django.template import Context, loader
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.csrf import csrf_exempt
import json
# to read images from urls
import os
import time
import matplotlib.pyplot as plt
import ast
# to read images from urls
import PIL
from PIL import Image
import tensorflow as tf
print(tf.__version__)
import numpy as np
import cv2
from timeit import default_timer as timer
# textbox++ models
from tbpp_model import TBPP512, TBPP512_dense
from tbpp_utils import PriorUtil
# ssd for help
from ssd_data import preprocess
from sl_utils import rbox3_to_polygon, polygon_to_rbox, rbox_to_polygon
from io import BytesIO
import matplotlib.pyplot as plt
import requests
from ssd_data import preprocess
import numpy as np

# Starting the model here.1
Model = TBPP512_dense
input_shape = (512,512,3)
weights_path = 'weights.022.h5'
confidence_threshold = 0.35
confidence_threshold = 0.25
sl_graph = tf.Graph()
with sl_graph.as_default():
    sl_session = tf.Session()
    with sl_session.as_default():
        sl_model = Model(input_shape)
        prior_util = PriorUtil(sl_model)
        sl_model.load_weights(weights_path, by_name=True)
input_width = 256
input_height = 32
weights_path = 'weights.022.h5'

@csrf_exempt
def index(request):
    decodeddata = request.body.decode('utf-8')
    dictdata = ast.literal_eval(decodeddata)
    username = dictdata["username"]
    imagename = dictdata["imagename"]
    imageurl = dictdata["imageurl"]

    start_time = time.time()
    # Final TextBox++ Code : (Works on just image)
    input_size = input_shape[:2]
    print(input_size)
    # getting the image
    url = imageurl
    response = requests.get(url)
    img = Image.open(BytesIO(response.content))
    img = np.array(img)
    img_h = img.shape[0]
    img_w = img.shape[1]
    img1 = np.copy(img)
    img2 = np.zeros_like(img)

    # model to predict
    x = np.array([preprocess(img, input_size)])

    elapsed_time = time.time() - start_time
    print("Performace measure : "+str(elapsed_time))

    #Model start
    start_time = time.time()
    with sl_graph.as_default():
        with sl_session.as_default():
            y = sl_model.predict(x)

    elapsed_time = time.time() - start_time
    print("Performace measure : "+str(elapsed_time))
    #Model end


    start_time = time.time()
    result = prior_util.decode(y[0], confidence_threshold)

    if len(result) > 0:
        bboxs = result[:,0:4]
        quads = result[:,4:12]
        rboxes = result[:,12:17]
        boxes = np.asarray([rbox3_to_polygon(r) for r in rboxes])
        xy = boxes
        xy = xy * [img_w, img_h]
        xy = np.round(xy)
        xy = xy.astype(np.int32)
        cv2.polylines(img1, tuple(xy), True, (0,0,255))
        rboxes = np.array([polygon_to_rbox(b) for b in np.reshape(boxes, (-1,4,2))])
        bh = rboxes[:,3]
        rboxes[:,2] += bh * 0.1
        rboxes[:,3] += bh * 0.2
        boxes = np.array([rbox_to_polygon(f) for f in rboxes])
        boxes = np.flip(boxes, axis=1) # TODO: fix order of points, why?
        boxes = np.reshape(boxes, (-1, 8))
        boxes_mask_a = np.array([b[2] > b[3] for b in rboxes]) # width > height, in square world
        boxes_mask_b = np.array([not (np.any(b < 0) or np.any(b > 512)) for b in boxes]) # box inside image
        boxes_mask = np.logical_and(boxes_mask_a, boxes_mask_b)
        boxes = boxes[boxes_mask]
        rboxes = rboxes[boxes_mask]
        xy = xy[boxes_mask]
        if len(boxes) == 0:
            boxes = np.empty((0,8))

    # draw
    saveimageindjango = 'assets/mloutput_'+username+"_"+imagename
    cv2.imwrite(saveimageindjango, img1)
    elapsed_time = time.time() - start_time
    print("Performace measure : "+str(elapsed_time))
    print("Sending to back end...")
    files = {'file': open(saveimageindjango, 'rb')}
    headers = {
        'username': username,
    }
    response = requests.request("POST", 'http://192.168.1.8:4000/upload', files=files, headers=headers)
    print(response)
    print("Backend Process Complete")
    context = {"data":"data"}
    return render(request, 'index.html', context)

@csrf_exempt
def runmodel(request):
    context = {"data":"data"}
    return render(request, 'index.html', context)
