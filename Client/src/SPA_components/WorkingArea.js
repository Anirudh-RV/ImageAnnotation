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
            var dataDrawn = "("+this.StartX+"|"+this.StartY+") ("+this.EndX+"|"+this.EndY+")</br>"
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

NextImage= () => {
  // clearing out previously draw boxes and adding back the image tag
  this.divCanvas.innerHTML = "";
  this.divCanvas.appendChild(this.ImageTag);

  if(this.state.index>this.state.ImageNames.length-2) {
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
  else {
    // send to nodejs to save
    var data = {'username':this.props.name,'imagename':this.state.ImageNames[this.state.index],'imagedata':this.outputdiv.innerHTML}
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

  this.state.index = this.state.index + 1
  if(this.ImageTag) {
   this.ImageTag.src = "http://192.168.1.8:4000/img/"+this.state.ImageNames[this.state.index];
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
   this.ImageTag.src = "http://192.168.1.8:4000/img/"+this.state.ImageNames[this.state.index];
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
  var url = "http://192.168.1.8:4000/img/"+this.state.ImageNames[this.state.index]
  var mloutputurl = "http://192.168.1.8:4000/img/mloutput_"+imagename
  console.log("name of user : "+username)
  console.log("name of image : "+imagename)
  console.log("link for url : "+url)

  var data = {'username':username,'imagename':imagename,'imageurl':url}
  console.log(data)
  console.log("link for mloutput : "+mloutputurl)
  console.log("inside the getmloutput function : ")
  axios.post("http://127.0.0.1:8000/index/",data)
    .then(res => { // then print response status
      //toast.success('upload success')
      console.log("API message : ")
      console.log(res)
      console.log(res.data["message"])
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
      console.log(res.data["data"])
       var ImageNames = res.data["data"].split("</br>");
       console.log("Image Name")
       console.log(ImageNames)
       ImageNames.pop();
       console.log(ImageNames)
       this.state.ImageNames = ImageNames
         if(this.ImageTag) {
          this.ImageTag.src = "http://192.168.1.8:4000/img/"+this.state.ImageNames[this.state.index];
       }
    })
    .catch(err => { // then print response status
    console.log("FAIL")
    console.log(err)
    })
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
          <button className="buttonclass" onClick={this.getmloutput}>CHECK ML OUTPUT</button>
        </div>
        <div ref = {c =>this.outputdiv = c}>
        </div>
      </div>
    );
  }
}
export default WorkingArea;
