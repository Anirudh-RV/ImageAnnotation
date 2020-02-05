import React, { Component } from 'react';
import './App.css';
import styles from './mystyle.module.css'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import UploadMultipleFiles from './UploadMultipleFiles';
import EditPage from './EditPage';
import Home from './Home';

class CustomRouting extends Component {
//TODO : ADD Footer information

  render() {
    try{
    if(this.props.location.state.checkval=== "Yes"){
      return (
         <BrowserRouter>
          <div>
            <Switch />
              <Switch>
              <Route path="/upload" component={UploadMultipleFiles}/>
              <Route path="/EditPage" component={EditPage}/>
              <Redirect to={{
            pathname: '/upload',
            state: {userName:this.props.location.state.usercredentials}
        }}
/>
             </Switch>
          </div>
        </BrowserRouter>
      );
    }
    else{
      return (
         <div>
              <Redirect to="/signin" />
         </div>
      );
    }
  }
  catch(e){
      return (
         <div>
              <Redirect to="/signin" />
         </div>
      );
    }
  }
}
export default CustomRouting;
