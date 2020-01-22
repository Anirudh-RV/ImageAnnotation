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
    console.log("end reached")
  }
  else {


  console.log("before : ")
  console.log(this.state.index)
  this.state.index = this.state.index + 1
  console.log("after : ")
  console.log(this.state.index)

  if(this.ImageTag) {
   this.ImageTag.src = "http://localhost:4000/img/"+this.state.ImageNames[this.state.index];
}

}
}


PrevImage= () => {

  if(this.state.index == 0)
  {
    console.log("start reached")
  }
  else {


  console.log("before : ")
  console.log(this.state.index)
  this.state.index = this.state.index - 1

  console.log("after : ")
  console.log(this.state.index)

  if(this.ImageTag) {
   this.ImageTag.src = "http://localhost:4000/img/"+this.state.ImageNames[this.state.index];
}

}
}


Apifuncgetimages = (userName) => {
  // data is going to be the username
  console.log("inside the testApi function : ")
  axios.post("http://localhost:8080/getimages",userName)
    .then(res => { // then print response status
      console.log("API : ")
      console.log(res)
      console.log(res.data["data"])
       var ImageNames = res.data["data"].split("</br>");
       ImageNames.pop();
       console.log(ImageNames)
       console.log(ImageNames[0])
       this.state.ImageNames = ImageNames
       console.log("state var : ")
       console.log(this.state.ImageNames)
       console.log(this.state.index)
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
  var userName = this.props.name
          if(this.DataRetrieved) {
           this.DataRetrieved.innerHTML = userName
        }

    // Call GO API to get all the image names of username
    this.Apifuncgetimages(userName)


}
  render() {
    let { index } =this.state

    return (
      <div>
      <div className = "columnLeft">
        Left Side {index}
        <h1 className='name' ref = {c => this.DataRetrieved = c}></h1>
        <img className='name' ref = {c => this.ImageTag = c}/>
        </div>

        <div className = "columnRight">
      Right Side
      <button type="button" class="btn btn-success btn-block" onClick={this.NextImage}>NEXT</button>
      <button type="button" class="btn btn-success btn-block" onClick={this.PrevImage}>PREVIOUS</button>
      </div>

      </div>
    );
  }
}
export default WorkingArea;
