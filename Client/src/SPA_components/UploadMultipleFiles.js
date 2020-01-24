import React, { Component } from 'react';
import axios from 'axios';
import {Progress} from 'reactstrap';


class UploadMultipleFiles extends Component {
  constructor(props) {
    super(props);
      this.state = {
        selectedFile: null,
        loaded:0
      }

  }
  checkMimeType=(event)=>{
    //getting file object
    let files = event.target.files
    //define message container
    let err = []
    // list allow mime type
   const types = ['image/png', 'image/jpeg', 'image/gif']
    // loop access array
    for(var x = 0; x<files.length; x++) {
     // compare file type find doesn't matach
         if (types.every(type => files[x].type !== type)) {
         // create error message and assign to container
         err[x] = files[x].type+' is not a supported format\n';
       }
     };
     for(var z = 0; z<err.length; z++) {// if message not same old that mean has error
         // discard selected file
        event.target.value = null
    }
   return true;
  }
  maxSelectFile=(event)=>{
    let files = event.target.files
        if (files.length > 10) {
           const msg = 'Only 10 images can be uploaded at a time'
           event.target.value = null
           return false;
      }
    return true;
 }
 checkFileSize=(event)=>{
  let files = event.target.files
  let size = 2000000
  let err = [];
  for(var x = 0; x<files.length; x++) {
  if (files[x].size > size) {
   err[x] = files[x].type+'is too large, please pick a smaller file\n';
 }
};
for(var z = 0; z<err.length; z++) {// if message not same old that mean has error
  // discard selected file
 event.target.value = null
}
return true;
}

// using Api, add names of the images being uploaded to a database
  addToBackendUsingApi = (files) =>{
      if(this.UserName) {
         var userName = this.UserName.value;
      }
      var fileNames = userName+",";
      for(var x =0; x<files.length-1;x++)
      {
        fileNames = fileNames +files[x].name+ ",";
      }
      fileNames = fileNames + files[files.length-1].name;
      // api call
      console.log("Calling Go api to insert data")
      axios.post("http://localhost:8080/insertimagedata",fileNames)
        .then(res => { // then print response status
          //toast.success('upload success')
          console.log("API message : ")
          console.log(res)
        })
        .catch(err => { // then print response status
        //  toast.error('upload fail')
        console.log(err)
        })
}

onChangeHandler=event=>{
  var files = event.target.files
  if(this.maxSelectFile(event) && this.checkMimeType(event) &&    this.checkFileSize(event)){
  // if return true allow to setState
     this.setState({
     selectedFile: files,
     loaded:0
  })
}
}

RedirecToEditPage = () =>{
  if(this.UserName) {
     var userName = this.UserName.value;
  }
  this.props.history.push({
    pathname: '/EditPage',
    state: {userName: userName}
})

}
  onClickHandler = () => {
    const data = new FormData()

// getting username from input
    if(this.UserName) {
       var userName = this.UserName.value;
    }

// filling FormData with selectedFiles(Array of objects)
    for(var x = 0; x<this.state.selectedFile.length; x++) {
      data.append('file', this.state.selectedFile[x])
    }

// header carries information of username to backend with data
    axios.post("http://localhost:4000/upload",data,
    {
    headers: {
      userName: userName
    },
      onUploadProgress: ProgressEvent => {
        this.setState({
          loaded: (ProgressEvent.loaded / ProgressEvent.total*100),
        })
      },
    })
      .then(res => { // then print response status
        //toast.success('upload success')
        this.addToBackendUsingApi(this.state.selectedFile)
        console.log("Upload success:\n"+res)
        // redirect to WorkingArea.js for viewing images
      })
      .catch(err => { // then print response status
      //  toast.error('upload fail')
      console.log("Upload fail"+err)
      })

    }

  render() {
    return (
      <div class="container">
	      <div class="row">
      	  <div class="offset-md-3 col-md-6">
          <div>
        <form>
          <label>
            User Name:
            <input type="text" name="name" ref = {c => this.UserName = c}/>
          </label>
        </form>
        </div>

               <div class="form-group files">
                <label>Upload Your File </label>
                <input id="input_upload" type="file" class="form-control" multiple onChange={this.onChangeHandler}/>
              </div>
              <div class="form-group">

              <Progress max="100" color="success" value={this.state.loaded} >{Math.round(this.state.loaded,2) }%</Progress>

              </div>

              <button type="button" class="buttonclass" onClick={this.onClickHandler}>Upload</button>
              <button type="button" class="buttonclass" onClick={this.RedirecToEditPage}>View Images</button>

	      </div>
      </div>
      </div>
    );
  }
}

export default UploadMultipleFiles;
