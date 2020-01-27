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

OnButton = () => {
  this.flag = true;
  this.initDraw(this.Canvas,this.flag,);

}
OffButton = () => {
  this.flag= false;
  this.initDraw(this.Canvas,this.flag);
}

initDraw= (canvas,flag) => {
    function setMousePosition(e) {
        var ev = e || window.event; //Moz || IE
        if (ev.pageX) { //Moz
            mouse.x = ev.pageX;
            mouse.y = ev.pageY;
        } else if (ev.clientX) { //IE
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

    canvas.onmousemove = function (e) {
      // draw only when flad is On
      if(flag)
      {
        setMousePosition(e);
        if (element !== null) {
            element.style.width = Math.abs(mouse.x - mouse.startX) + 'px';
            element.style.height = Math.abs(mouse.y - mouse.startY) + 'px';
            element.style.left = (mouse.x - mouse.startX < 0) ? mouse.x + 'px' : mouse.startX + 'px';
            element.style.top = (mouse.y - mouse.startY < 0) ? mouse.y + 'px' : mouse.startY + 'px';
        }
      }
    }

    canvas.onclick = function (e) {
      console.log("ONorOFF : "+flag);
      if(flag)
      {
        if (element !== null) {
            element = null;
            canvas.style.cursor = "default";
            console.log("mouse: ENDX : "+mouse.x)
            console.log("mouse: ENDY : "+mouse.y)
            this.EndX = mouse.x;
            this.EndY = mouse.y;
            console.log("mouse: STARTX : "+this.StartX+"</br>mouse: startY : "+this.StartY+"</br>mouse: ENDX : "+this.EndX+"</br>mouse: ENDY : "+this.EndY);
            console.log("finsihed.");
        } else {
            console.log("begun.");
            mouse.startX = mouse.x;
            mouse.startY = mouse.y;
            element = document.createElement('div');
            element.className = 'rectangle'
            element.style.left = mouse.x + 'px';
            element.style.top = mouse.y + 'px';
            canvas.appendChild(element)
            canvas.style.cursor = "crosshair";
            console.log("mouse: STARTX : "+mouse.x)
            console.log("mouse: startY : "+mouse.y)
            this.StartX = mouse.x;
            this.StartY = mouse.y;
        }
    }
  }
}

NextImage= () => {
  if(this.state.index>this.state.ImageNames.length-2)
  {
    console.log("end")
  }
  else {
  this.state.index = this.state.index + 1
  if(this.ImageTag) {
   this.ImageTag.src = "http://localhost:4000/img/"+this.state.ImageNames[this.state.index];
    }
  }
}


PrevImage= () => {
  if(this.state.index == 0)
  {
    console.log("start")
  }
  else {
  this.state.index = this.state.index - 1
  if(this.ImageTag) {
   this.ImageTag.src = "http://localhost:4000/img/"+this.state.ImageNames[this.state.index];
    }
  }
}


Apifuncgetimages = (userName) => {
  // data is going to be the username
  axios.post("http://localhost:8080/getimages",userName)
    .then(res => { // then print response status
      console.log("API : ")
      console.log(res)
      console.log(res.data["data"])
       var ImageNames = res.data["data"].split("</br>");
       ImageNames.pop();
       this.state.ImageNames = ImageNames
         if(this.ImageTag) {
          this.ImageTag.src = "http://localhost:4000/img/"+this.state.ImageNames[this.state.index];
       }
    })
    .catch(err => { // then print response status
    console.log("fail")
    console.log(err)
    })
  }

componentDidMount(){
    // Call GO API to get all the image names of username
    this.Apifuncgetimages(this.props.name)
    this.flag = false;
    this.startX = 0;
    this.EndX = 0;
    this.StartY = 0;
    this.EndY = 0;
}
  render() {
    return (
      <div>
        <div className = "columnLeft">
        <p>Left Side</p>
        <div ref = {c => this.Canvas = c} >
        <img className='name' ref = {c => this.ImageTag = c}/>
        </div>
          </div>
        <div className = "columnRight">
        <p>Right Side</p>
          <button type="button" class="buttonclass" onClick={this.NextImage}>NEXT</button>
          <button type="button" class="buttonclass" onClick={this.PrevImage}>PREVIOUS</button>
          <button className="buttonclass" onClick={this.OnButton}>ON</button>
          <button className="buttonclass" onClick={this.OffButton}>OFF</button>
        </div>
      </div>
    );
  }
}
export default WorkingArea;
