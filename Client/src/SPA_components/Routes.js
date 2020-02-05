import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import UploadFile from './UploadFile';
import Home from './Home';
import UploadMultipleFiles from './UploadMultipleFiles';
import TestAPI from './TestAPI';
import Signin from './Signin';
import TestDraw from './test_draw';
import SignUp from './SignUp';
import TestSignUp from './TestSignUp';
import CustomRouting from './CustomRouting';

// Routes for the webpages in the project
class Routes extends Component {
  render() {
    return (
       <BrowserRouter>
        <div>
          <Switch />
            <Switch>
             <Route path="/customrouting" component = {CustomRouting} />
             <Route path="/signup" component = {SignUp} />
             <Route path="/signin" component= {Signin} />
             <Route path="/testapi" component={TestAPI}/>
             <Route path="/" component={Home}/>
             <Route component={Error}/>
           </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
