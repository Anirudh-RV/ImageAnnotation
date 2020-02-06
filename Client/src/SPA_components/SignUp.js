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
}

len = (checkvar) => {
  return checkvar.length;
}
validateEmail = (email) => {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

handleSubmit = () =>{

  var email = this.emailId.value;
  var username = this.userName.value;
  var fullname = this.fullName.value;
  var password = this.Password.value;
  var flag = true;

// validating email
  if(this.validateEmail(email)){
  this.emailError.innerHTML = "";
  console.log("email : "+email+"\nusername : "+username+"\nfullname : "+fullname+"\npassword : "+password+"\n");
  }
  else{
    flag = false;
    console.log("Email Error");
    this.emailError.innerHTML = "Invalid emailId";
  }

// validating username
  if(this.len(username)>=4){
  this.userNameError.innerHTML = "";
  console.log(this.len(username));
  console.log("email : "+email+"\nusername : "+username+"\nfullname : "+fullname+"\npassword : "+password+"\n");
  }
  else{
    flag = false;
    console.log("userName Error");
    this.userNameError.innerHTML = "Invalid Username";
  }

// validating fullName
  if(this.len(fullname)!=0){
  this.fullNameError.innerHTML = "";
  console.log(this.len(fullname));
  console.log("email : "+email+"\nusername : "+username+"\nfullname : "+fullname+"\npassword : "+password+"\n");
  }
  else{
    flag = false;
    console.log("fullName Error");
    this.fullNameError.innerHTML = "Please fill your name";
  }

// validating passWord
  if(this.len(password)>=6){
  this.PasswordError.innerHTML = "";
  console.log(this.len(password));
  console.log("email : "+email+"\nusername : "+username+"\nfullname : "+fullname+"\npassword : "+password+"\n");
  }
  else{
    flag = false;
    console.log("fullName Error");
    this.PasswordError.innerHTML = "Password too weak";
  }

  if(flag){
    // allow to pass through the API
    this.emailError.innerHTML = "";
    this.userNameError.innerHTML = "";
    this.fullNameError.innerHTML = "";
    this.PasswordError.innerHTML = "";


    console.log("valid entry");
  }
  else{
    // show error (do nothing)
    console.log("invalid entry");
  }

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
            ref = {c => this.emailId = c}
          />
        </FormGroup>

        <p className = "ErrorMessage" ref = {c => this.emailError = c}></p>

        <FormGroup controlId="Username" bsSize="large">
          <FormControl
            autoFocus
            placeholder="Username"
            ref = {c => this.userName = c}
          />
        </FormGroup>

        <p className = "ErrorMessage" ref = {c => this.userNameError = c}></p>

        <FormGroup controlId="Name" bsSize="large">
          <FormControl
            autoFocus
            placeholder="Full Name"
            ref = {c => this.fullName = c}
          />
        </FormGroup>

        <p className = "ErrorMessage" ref = {c => this.fullNameError = c}></p>


        <FormGroup controlId="password" bsSize="large">
          <FormControl
              placeholder="Password"
              ref = {c => this.Password = c}
              type="password"
          />

          <p className = "ErrorMessage" ref = {c => this.PasswordError = c}></p>


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
