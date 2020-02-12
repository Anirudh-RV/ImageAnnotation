from django.shortcuts import render , render_to_response , redirect
import csv, io
from django.contrib import messages
from django.contrib.auth.decorators import permission_required
from django.template import Context, loader
from django.http import HttpResponse
import cv2
import sqlite3
import re
from django.views.decorators.csrf import csrf_exempt
import os
import requests

from django.http import HttpResponse

# Create your views here.
def index(request):
    return render_to_response('index.html')
