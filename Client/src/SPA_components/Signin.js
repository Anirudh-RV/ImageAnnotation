import React, { Component } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Bootstrap from "react-bootstrap";
import {FormGroup, FormControl} from "react-bootstrap";


class Signin extends Component {
//TODO : ADD Footer information

componentDidMount(){
// OnLoad function

}

handleSubmit = () =>{

    if(this.UserName) {
      console.log(this.UserName.value)

      this.props.history.push({
        pathname: '/Upload',
        state: {userName: this.UserName.value}
    })


    }

}



  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <p>Email</p>
            <FormControl
              autoFocus
              placeholder="enter email ID"
              ref = {c => this.UserName = c}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <p>Password</p>
            <FormControl
              placeholder="enter password"
              ref = {c => this.Password = c}
              type="password"
            />
          </FormGroup>
          <Button block bsSize="large" onClick={this.handleSubmit} type="button">
            Login
          </Button>
        </form>
      </div>
    );
  }
}
export default Signin;
