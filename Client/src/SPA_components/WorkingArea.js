import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class WorkingArea extends Component {
//TODO : ADD INTRODUCTION TO PROJECT

constructor(){
  super();
  this.state= {
    index:0,
  }
}

onButton = () => {
  this.flag = true;
  this.initDraw(this.divCanvas,this.flag,this.outputdiv);

}
offButton = () => {
  this.flag= false;
  this.initDraw(this.divCanvas,this.flag,this.outputdiv );
}

initDraw= (drawElement,flag,outputdiv) => {
    function setMousePosition(e) {
        var ev = e || window.event; //Moz || IE
        if (ev.pageX) { //Moz
            mouse.x = ev.pageX;
            mouse.y = ev.pageY;
        }
        else if (ev.clientX) { //IE
            mouse.x = ev.clientX ;
            mouse.y = ev.clientY ;
        }
    };

    var mouse = {
        x: 0,
        y: 0,
        startX: 0,
        startY: 0
    };
    var element = null;

    drawElement.onmousemove = function (e) {
      // draw only when flad is On
      if(flag) {
        setMousePosition(e);
        if (element !== null) {
            element.style.width = Math.abs(mouse.x - mouse.startX) + 'px';
            element.style.height = Math.abs(mouse.y - mouse.startY) + 'px';
            element.style.left = (mouse.x - mouse.startX < 0) ? mouse.x + 'px' : mouse.startX + 'px';
            element.style.top = (mouse.y - mouse.startY < 0) ? mouse.y + 'px' : mouse.startY + 'px';
        }
      }
    }

    drawElement.onclick = function (e) {
      console.log("ONorOFF : "+flag);
      console.log(e);
      if(flag) {
        if (element !== null) {
            element = null;
            drawElement.style.cursor = "default";
            console.log("mouse: ENDX : "+mouse.x)
            console.log("mouse: ENDY : "+mouse.y)
            this.EndX = mouse.x;
            this.EndY = mouse.y - 125;
            var dataDrawn = "("+this.StartX+","+this.StartY+") ("+this.EndX+","+this.EndY+")"
            this.imageTextData = dataDrawn
            outputdiv.innerHTML = outputdiv.innerHTML +"\n"+dataDrawn
            console.log("displaying here : "+this.imageTextData)
            console.log("finsihed.");

        }
        else {
            console.log("begun.");
            mouse.startX = mouse.x;
            mouse.startY = mouse.y;
            element = document.createElement('div');
            element.className = 'rectangle'
            element.style.left = mouse.x + 'px';
            element.style.top = mouse.y + 'px';
            drawElement.appendChild(element)
            drawElement.style.cursor = "crosshair";
            console.log("mouse: STARTX : "+mouse.x)
            console.log("mouse: startY : "+mouse.y)
            this.StartX = mouse.x;
            this.StartY = mouse.y - 125;
        }
    }
  }
}

saveastextfile = () =>{
  // send to nodejs to save
  console.log("send data to node backend : ")
  axios.post("http://192.168.1.8:4000/saveastextfile/",{
    username : this.props.name,
    imagename : this.state.ImageNames[this.state.index],
    imagedata : this.outputdiv.innerHTML
    })
    .then(res => { // then print response status
      //toast.success('upload success')
      console.log("API message : ")
      console.log(res)
    })
    .catch(err => { // then print response status
    //  toast.error('upload fail')
    console.log("fail")
    console.log(err)
    })
}
NextImage= () => {
  // clearing out previously draw boxes and adding back the image tag
  this.divCanvas.innerHTML = "";
  this.divCanvas.appendChild(this.ImageTag);

  if(this.state.index>this.state.ImageNames.length-2) {
    // Do nothing
  }
  else {
    this.state.index = this.state.index + 1
    if(this.ImageTag) {
     this.ImageTag.src = "http://192.168.1.8:4000/img/"+this.props.name+"/images/"+this.state.ImageNames[this.state.index];
      }
    }
  this.outputdiv.innerHTML = "";
}


PrevImage= () => {
  // clearing out previously draw boxes and adding back the image tag
  this.divCanvas.innerHTML = "";
  this.divCanvas.appendChild(this.ImageTag);
  if(this.state.index == 0) {
    console.log("start")
  }
  else {
  this.state.index = this.state.index - 1
  if(this.ImageTag) {
   this.ImageTag.src = "http://192.168.1.8:4000/img/"+this.props.name+"/images/"+this.state.ImageNames[this.state.index];
    }
  }
  this.outputdiv.innerHTML = "";
}

testSaveText = () =>{
  var data = this.state.ImageNames[this.state.index]+","+ this.outputdiv.innerHTML
  console.log(data)
  axios.post("http://192.168.1.8:8080/saveastextfile",data)
    .then(res => { // then print response status
      console.log("API : ")
      console.log(res)
      console.log(res.data["message"])
    })
    .catch(err => { // then print response status
    console.log("FAIL")
    console.log(err)
    })

}

getmloutput = () =>{
  var username = this.props.name
  var imagename = this.state.ImageNames[this.state.index]
  var url = "http://192.168.1.8:4000/img/"+this.props.name+"/images/"+this.state.ImageNames[this.state.index]
  var mloutputurl = "http://192.168.1.8:4000/img/"+this.props.name+"/images/mloutput_"+this.props.name+"_"+imagename
  var data = {'username':username,'imagename':imagename,'imageurl':url}
  axios.post("http://192.168.1.8:8000/index/",data)
    .then(res => { // then print response status
      //toast.success('upload success')
      console.log("API message : ")
      console.log(res)
      window.open(mloutputurl, '_blank');
    })
    .catch(err => { // then print response status
    //  toast.error('upload fail')
    console.log("fail")
    console.log(err)
    })
}
Apifuncgetimages = (userName) => {
  // data is going to be the username
  console.log("Calling GO API at 8080 : ")
  axios.post("http://192.168.1.8:8080/getimages",userName)
    .then(res => { // then print response status
      console.log("API : ")
      console.log(res)
       var ImageNames = res.data["data"].split("</br>");
       console.log("Image Name")
       console.log(ImageNames)
       ImageNames.pop();
       console.log(ImageNames)
       this.state.ImageNames = ImageNames
         if(this.ImageTag) {
           console.log("http://192.168.1.8:4000/img/"+this.props.name+'/images/'+this.state.ImageNames[this.state.index]);
          this.ImageTag.src = "http://192.168.1.8:4000/img/"+this.props.name+"/images/"+this.state.ImageNames[this.state.index];
       }
    })
    .catch(err => { // then print response status
    console.log("FAIL")
    console.log(err)
    })
  }

downloadfiles = () =>{
    console.log("inside the downloadfiles function : ")
    axios.post("http://192.168.1.8:4000/downloadfiles/",{
      username : this.props.name
    })
      .then(res => { // then print response status
        //toast.success('upload success')
        console.log(res)
        // after creating the zip file, now download
        window.open('http://192.168.1.8:4000/img/'+this.props.name+'.zip');
      })
      .catch(err => {
      // then print response status
      //  toast.error('upload fail')
      console.log("fail")
      console.log(err)
      })
}

wait = (ms) =>{
var d = new Date();
var d2 = null;
do { d2 = new Date(); }
while(d2-d < ms);
}


downloadallfiles = () =>{
  console.log("inside the downloadallfiles function : ")
  axios.post("http://192.168.1.8:4000/downloadallfiles/",{
    username : this.props.name
  })
    .then(res => { // then print response status
      //toast.success('upload success')
      console.log(res)
      // after creating the zip file, now download
      this.wait(5000);
      this.testall();
    })
    .catch(err => {
    // then print response status
    //  toast.error('upload fail')
    console.log("fail")
    console.log(err)
    })
}

testall = () =>{
  window.open('http://192.168.1.8:4000/img/all_'+this.props.name+'.zip');
}

componentDidMount(){
    // Call GO API to get all the image names of username
    this.Apifuncgetimages(this.props.name)

    // setting environment variables
    this.flag = false;
    this.startX = 0;
    this.EndX = 0;
    this.StartY = 0;
    this.EndY = 0;
    this.imageTextData = " ";
}

render() {
    return (
      <div>
        <div className = "columnLeft">
        <p>Left Side</p>
          <div ref = {c => this.divCanvas = c} >
          <img className='name' ref = {c => this.ImageTag = c}/>
          </div>
        </div>
        <div className = "columnRight">
        <p>Right Side</p>
          <button type="button" class="buttonclass" onClick={this.NextImage}>NEXT</button>
          <button type="button" class="buttonclass" onClick={this.PrevImage}>PREVIOUS</button>
          <button className="buttonclass" onClick={this.onButton}>ON</button>
          <button className="buttonclass" onClick={this.offButton}>OFF</button>
          <button className="buttonclass" onClick={this.saveastextfile}>SAVE</button>
          <button className="buttonclass" onClick={this.getmloutput}>CHECK ML OUTPUT</button>
          <button className="buttonclass" onClick={this.downloadfiles}>DOWNLOAD DATA</button>
          <button className="buttonclass" onClick={this.downloadallfiles}>DOWNLOAD ALL</button>

        </div>
        <p hidden ref = {c =>this.outputdiv = c}>
        </p>
      </div>
    );
  }
}
export default WorkingArea;
