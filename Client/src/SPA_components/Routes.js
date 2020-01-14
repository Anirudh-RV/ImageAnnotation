import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import EditPage from './EditPage';
import UploadFile from './UploadFile';
import Home from './Home';
import UploadMultipleFiles from './UploadMultipleFiles';

class Routes extends Component {
  render() {
    return (
       <BrowserRouter>
        <div>
          <Switch />
            <Switch>
             <Route path="/multiplefiles" component={UploadMultipleFiles}/>
             <Route path="/EditPage" component={EditPage}/>
             <Route path="/UploadFile" component={UploadFile}/>
             <Route path="/" component={Home}/>
             <Route component={Error}/>
           </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
