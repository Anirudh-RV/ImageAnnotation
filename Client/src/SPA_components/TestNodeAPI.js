import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


class TestAPI extends Component {
//TODO : ADD INTRODUCTION TO PROJECT


tesnodeapi = () =>{
  var data = {'username':'anirudhrv','imagename':'scrib.jpeg','imagedata':"something in text here"}
  console.log("inside the testnodeapi function : ")
  axios.post("http://192.168.1.8:4000/saveastextfile/",{
    username : 'anirudhrv',
    imagename : 'testingscrib.jpeg',
    imagedata : 'something in text here'
  })
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

testdownloadapi = () =>{
  console.log("inside the testnodeapi function : ")
  axios.post("http://192.168.1.8:4000/downloadfiles/",{
    username : 'anirudhrv'
  })
    .then(res => { // then print response status
      //toast.success('upload success')
    })
    .catch(err => {
    // then print response status
    //  toast.error('upload fail')
    console.log("fail")
    console.log(err)
    })
}

testdownloadzip = () =>{
  axios({
    url: 'http://localhost:4000/file/anirudhrv.zip',
    method: 'GET',
    responseType: 'blob', // important
  }).then((response) => {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'anirudhrv.zip');
    document.body.appendChild(link);
    link.click();
  });

}
  render() {
    return (
      <div className="App">
      <h1>TESTING API TO NODE, check developer tools for console.</h1>

      <pre>

      </pre>

      <button type="button" class="btn btn-success btn-block" onClick={this.tesnodeapi}> TEST API TO NODE 1</button>
      <button type="button" class="btn btn-success btn-block" onClick={this.testdownloadapi}> TEST DOWNLOAD OF FILE </button>
      <button type="button" class="btn btn-success btn-block" onClick={this.testdownloadzip}> TEST DOWNLOAD OF ZIP </button>

      <h1 className='name' ref = {c => this.DataRetrieved = c}></h1>
      </div>

    );
  }
}
export default TestAPI;
