import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


class TestAPI extends Component {
//TODO : ADD INTRODUCTION TO PROJECT


testApifuncPost = () => {
  console.log("inside the testApi function : ")
  axios.post("http://localhost:8080/")
    .then(res => { // then print response status
      //toast.success('upload success')
      console.log("API : ")
      console.log(res)
      console.log(res.data["message"])
      if(this.DataRetrieved) {
       this.DataRetrieved.innerHTML = res.data["message"];
    }

    })
    .catch(err => { // then print response status
    //  toast.error('upload fail')
    console.log("fail")
    })
  }


  testApifuncGet = () => {
    console.log("inside the testApi function : ")
    axios.get("http://localhost:8080/")
      .then(res => { // then print response status
        //toast.success('upload success')
        console.log("API : ")
        console.log(res)
        console.log(res.data["message"])
        if(this.DataRetrieved) {
         this.DataRetrieved.innerHTML = res.data["message"];
      }

      })
      .catch(err => { // then print response status
      //  toast.error('upload fail')
      console.log("fail")
      })
    }


    testApifuncPut = () => {
      console.log("inside the testApi function : ")
      axios.put("http://localhost:8080/")
        .then(res => { // then print response status
          //toast.success('upload success')
          console.log("API : ")
          console.log(res)
          console.log(res.data["message"])
          if(this.DataRetrieved) {
           this.DataRetrieved.innerHTML = res.data["message"];
        }

        })
        .catch(err => { // then print response status
        //  toast.error('upload fail')
        console.log("fail")
        })
      }

      testApifuncDelete = () => {
        console.log("inside the testApi function : ")
        axios.delete("http://localhost:8080/")
          .then(res => { // then print response status
            //toast.success('upload success')
            console.log("API : ")
            console.log(res)
            console.log(res.data["message"])
            if(this.DataRetrieved) {
             this.DataRetrieved.innerHTML = res.data["message"];
          }

          })
          .catch(err => { // then print response status
          //  toast.error('upload fail')
          console.log("fail")
          })
        }

      testApifuncdeleteuser = () => {
        var name = "profoak"
        console.log("inside the testApi function : ")
        axios.post("http://localhost:8080/deleteuser",name)
          .then(res => { // then print response status
            //toast.success('upload success')
            console.log("API : ")
            console.log(res)
            console.log(res.data["message"])
            if(this.DataRetrieved) {
             this.DataRetrieved.innerHTML = res.data["message"];
          }

          })
          .catch(err => { // then print response status
          //  toast.error('upload fail')
          console.log("fail")
          })
        }

        testApifuncinsertimagedata = () => {
          // send only strings
          var data = "profoak,frontend1,frontend2,frontend3"
          console.log("inside the testApi function : ")
          axios.post("http://localhost:8080/insertimagedata",data)
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


          testApifuncgetimages = () => {
            // data is going to be the username
            var data = "user1"
            console.log("inside the testApi function : ")
            axios.post("http://localhost:8080/getimages",data)
              .then(res => { // then print response status
                //toast.success('upload success')
                console.log("API : ")
                console.log(res)
                console.log(res.data["data"])
                if(this.DataRetrieved) {
                 this.DataRetrieved.innerHTML = res.data["data"];
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
      <h1>TESTING API, check developer tools for console.</h1>

      <pre>




      </pre>

      <button type="button" class="btn btn-success btn-block" onClick={this.testApifuncPost}> CALL POST </button>
      <button type="button" class="btn btn-success btn-block" onClick={this.testApifuncGet}> CALL GET </button>
      <button type="button" class="btn btn-success btn-block" onClick={this.testApifuncPut}> CALL PUT </button>
      <button type="button" class="btn btn-success btn-block" onClick={this.testApifuncDelete}>  CALL DELETE</button>

      <pre>




      </pre>

      <button type="button" class="btn btn-success btn-block" onClick={this.testApifuncinsertimagedata}> CALL insertimagedata </button>
      <button type="button" class="btn btn-success btn-block" onClick={this.testApifuncgetimages}> CALL getimages </button>
      <button type="button" class="btn btn-success btn-block" onClick={this.testApifuncdeleteuser}>  DELETE USER (change name in API CALL-incode)</button>


      <h1 className='name' ref = {c => this.DataRetrieved = c}></h1>
      </div>

    );
  }
}
export default TestAPI;
