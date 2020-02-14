import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


class TestAPI extends Component {
//TODO : ADD INTRODUCTION TO PROJECT


testdjangoapi = () =>{
  var data = {'username':'anirudhrv','imagename':'scrib.jpeg','imageurl':"http://localhost:4000/img/anirudhrv_scrib.jpeg"}
  console.log("inside the testdjangoapi function : ")
  axios.post("http://127.0.0.1:8000/index/",data)
    .then(res => { // then print response status
      //toast.success('upload success')
      console.log("API message : ")
      console.log(res)
      console.log(res.data["message"])
      if(this.DataRetrieved) {
       this.DataRetrieved.innerHTML = res.data["message"];
    }

    })
    .catch(err => { // then print response status
    //  toast.error('upload fail')
    console.log("fail")
    console.log(err)
    })
}




  render() {
    return (
      <div className="App">
      <h1>TESTING DJANGO API, check developer tools for console.</h1>

      <pre>

      </pre>

      <button type="button" class="btn btn-success btn-block" onClick={this.testdjangoapi}> TEST DJANGO API </button>

      <h1 className='name' ref = {c => this.DataRetrieved = c}></h1>
      </div>

    );
  }
}
export default TestAPI;
