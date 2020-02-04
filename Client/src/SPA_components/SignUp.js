import React, { Component } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Bootstrap from "react-bootstrap";
import {FormGroup, FormControl} from "react-bootstrap";
import { Link } from 'react-router-dom';
import IntroBar from './IntroBar';
class SignUp extends Component {
//TODO : ADD Footer information

componentDidMount(){
// OnLoad function

console.log("load complete")
}

handleSubmit = () =>{

}

  render() {
    return (
      <div className = "BackgroundSign">
      <h1 className = "AppName" >End-to-end data curation and annotation platform</h1>

      <div className="Login">
        <form onSubmit={this.handleSubmit}>
        <p class = "SignInHead">X-P1</p>

        <p class = "SignUpHead">Sign up to make data collection and image annotation easier.</p>

        <FormGroup controlId="email" bsSize="large">
          <FormControl
            autoFocus
            placeholder="Email"
            ref = {c => this.UserName = c}
          />
        </FormGroup>

        <FormGroup controlId="Username" bsSize="large">
          <FormControl
            autoFocus
            placeholder="Username"
            ref = {c => this.UserName = c}
          />
        </FormGroup>


        <FormGroup controlId="Name" bsSize="large">
          <FormControl
            autoFocus
            placeholder="Full Name"
            ref = {c => this.UserName = c}
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
            Sign up
          </Button>

          <p class = "Terms">By signing up, you agree to our Terms , Data Policy and Cookies Policy .</p>
        </form>
      </div>

      <div className="SecondBox">

        <p className = "LinkToAccount">  Have an account?&nbsp;
          <Link className="LinkToSignIn" to = './signin'>Log in</Link>
        </p>
      </div>
      </div>
    );
  }
}
export default SignUp;
