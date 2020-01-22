import React, { Component } from 'react';
import './App.css';

import NavigationBar from './NavigationBar'
import WorkingArea from './WorkingArea'
import Footer from './Footer'


class EditPage extends Component {
//TODO : ADD Footer information

  render() {
    return (
      <div>
      <body>
         <NavigationBar />
         <WorkingArea name={this.props.location.state.userName}/>
      </body>

     </div>

    );
  }
}
export default EditPage;
