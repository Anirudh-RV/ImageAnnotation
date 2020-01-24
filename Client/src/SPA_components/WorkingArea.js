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
}
  render() {
    return (
      <div>
        <div className = "columnLeft">
        <p>Left Side</p>
        <img className='name' ref = {c => this.ImageTag = c}/>
        <button type="button" class="buttonclass" onClick={this.NextImage}>NEXT</button>
        <button type="button" class="buttonclass" onClick={this.PrevImage}>PREVIOUS</button>
          </div>
        <div className = "columnRight">
        <p>Right Side</p>
          <button type="button" class="buttonclass" onClick={this.NextImage}>NEXT</button>
          <button type="button" class="buttonclass" onClick={this.PrevImage}>PREVIOUS</button>
        </div>
      </div>
    );
  }
}
export default WorkingArea;
