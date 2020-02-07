import React, { Component } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Bootstrap from "react-bootstrap";
import {FormGroup, FormControl} from "react-bootstrap";
import { Link } from 'react-router-dom';
import axios from 'axios';

class Signin extends Component {
//TODO : ADD Footer information

componentDidMount(){
// OnLoad function

}

handleSubmit = () =>{
  console.log(this.usercredentials.value);

  var data = this.usercredentials.value+",password"
  console.log("inside the testApifunccheckuser function : ")
  axios.post("http://localhost:8080/authorizeuser",data)
    .then(res => { // then print response status
      //toast.success('upload success')
      console.log("API message : ")
      console.log(res)
      console.log(res.data["message"])
    this.props.history.push({
      pathname: '/customrouting',
      state: {usercredentials: this.usercredentials.value,checkval : res.data["message"]}
  })

    })
    .catch(err => { // then print response status
    //  toast.error('upload fail')
    console.log("fail")
    console.log(err)
    })
}

  render() {
    return (
      <div className = "BackgroundSign">
      <h1 className = "AppName" >End-to-end data curation and annotation platform</h1>

      <div className="SignIn">
        <form onSubmit={this.handleSubmit}>
        <p class = "SignInHead">X-P1</p>
        <p class = "SignUpHead">Sign In to make data collection and image annotation easier.</p>

          <FormGroup controlId="email" bsSize="large">
            <FormControl
              autoFocus
              placeholder="Username, or email"
              ref = {c => this.usercredentials = c}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <FormControl
              placeholder="Password"
              ref = {c => this.Password = c}
              type="password"
            />
          </FormGroup>
          <Button block bsSize="large" onClick={this.handleSubmit} type="button">
            Log In
          </Button>
        </form>
      </div>
      <div className="SecondBoxSignIn">

        <p className = "LinkToAccount"> Don't have an account?&nbsp;
          <Link className="LinkToSignUp" to = './signup'>Sign up</Link>
        </p>
      </div>
      </div>
    );
  }
}
export default Signin;
