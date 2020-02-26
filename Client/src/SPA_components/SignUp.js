import React, { Component } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Bootstrap from "react-bootstrap";
import {FormGroup, FormControl} from "react-bootstrap";
import { Link } from 'react-router-dom';
import IntroBar from './IntroBar';
import axios from 'axios';
import Cookies from 'universal-cookie';

class SignUp extends Component {
//TODO : ADD Footer information

componentDidMount(){
// OnLoad function
this.accountexists = false;
this.userNameExists = false;
this.handleEmail.bind(this);
}

//addusertodatabase

signupUser = () =>{
    var email = this.emailId.value;
    var username = this.userName.value;
    var fullname = this.fullName.value;
    var password = this.Password.value;
    console.log("\n"+email+"\n"+username+"\n"+fullname+"\n"+password+"\n")
    console.log("Calling GO API at 8080 : ")
    var data = email+","+username+","+fullname+","+password
    axios.post("http://192.168.1.8:8080/addusertodatabase",data)
      .then(res => { // then print response status
        //toast.success('upload success')
        const cookies = new Cookies()
        cookies.set('username',this.userName.value, { path: '/' })
        console.log(cookies.get('username'))

        console.log("API message : ")
        console.log(res)
        console.log("result : "+res.data["message"])

        // redirect to CustomRouting with data
        this.props.history.push({
          pathname: '/customrouting',
          state: {usercredentials: username,checkval : res.data["message"]}
      })
      })
      .catch(err => { // then print response status
      //  toast.error('upload fail')
      console.log("fail")
      console.log(err)
      })

}
len = (checkvar) => {
  return checkvar.length;
}

validateEmail = (email) => {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

checkforexistingUsername = (field,value) =>{
  var data = field+","+value;
  console.log("Calling GO API at 8080 : ")
  axios.post("http://192.168.1.8:8080/validateinfo",data)
    .then(res => { // then print response status
      //toast.success('upload success')
      console.log("API message : ")
      console.log(res)
      console.log("result : "+res.data["message"])
      if(res.data["message"] == "Yes"){
        // existing emailID
        this.userNameError.innerHTML = "UserName already taken, please try another.";
      }
      else{
        // EmailID,UserName,FullName,Password : good
        // call signupUser
        this.signupUser();

      }

    })
    .catch(err => { // then print response status
    //  toast.error('upload fail')
    console.log("fail")
    console.log(err)
    })
}

checkforexistingEmail = (field,value,username) =>{
  var data = field+","+value;
  console.log("Calling GO API at 8080 : ")
  axios.post("http://192.168.1.8:8080/validateinfo",data)
    .then(res => { // then print response status
      //toast.success('upload success')
      console.log("API message : ")
      console.log(res)
      console.log("result : "+res.data["message"])
      if(res.data["message"] == "Yes"){
        // existing emailID
        this.emailError.innerHTML = "Already existing email, do you want to login?";
      }
      else{
        // EmailID is good, check for UserName
        this.checkforexistingUsername("username",username);
      }

    })
    .catch(err => { // then print response status
    //  toast.error('upload fail')
    console.log("fail")
    console.log(err)
    })
}

handleEmail = (email,flag) => {
  if(this.validateEmail(email)){
  this.emailError.innerHTML = "";

  // check for exisiting emailId
  }
  else{
    flag = false;
    console.log("Email Error");
    this.emailError.innerHTML = "Invalid emailId";
  }
  return flag;
}

handleuserName = (username,flag) => {
  if(this.len(username)>=4){
  this.userNameError.innerHTML = "";
  }
  else{
    flag = false;
    console.log("userName Error");
    this.userNameError.innerHTML = "Invalid Username";
  }
  return flag;
}

handlefullName = (fullname,flag) => {
  if(this.len(fullname)!=0){
  this.fullNameError.innerHTML = "";
  console.log(this.len(fullname));
  }
  else{
    flag = false;
    console.log("fullName Error");
    this.fullNameError.innerHTML = "Please fill your name";
  }
  return flag;
}

handlePassword = (password,flag) => {
  if(this.len(password)>=6){
  this.PasswordError.innerHTML = "";
  console.log(this.len(password));
  }
  else{
    flag = false;
    console.log("fullName Error");
    this.PasswordError.innerHTML = "Password too weak";
  }
  return flag;
}


handleSubmit = () =>{

  var email = this.emailId.value;
  var username = this.userName.value;
  var fullname = this.fullName.value;
  var password = this.Password.value;
  var flag = true;


// validating email
  flag = this.handleEmail(email,flag);

// validating username
  flag = this.handleuserName(username,flag);

// validating fullName
  flag = this.handlefullName(fullname,flag);

// validating passWord
  flag = this.handlePassword(password,flag);

  if(flag){
    // allow to pass through the API
    this.checkforexistingEmail("email",email,username);
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
        <form>
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
