import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import EditPage from './EditPage';
import UploadFile from './UploadFile';
import Home from './Home';
import UploadMultipleFiles from './UploadMultipleFiles';
import TestAPI from './TestAPI';
// Routes for the webpages in the project
class Routes extends Component {
  render() {
    return (
       <BrowserRouter>
        <div>
          <Switch />
            <Switch>
             <Route path="/testapi" component={TestAPI}/>
             <Route path="/multiplefiles" component={UploadMultipleFiles}/>
             <Route path="/editpage" component={EditPage}/>
            // Testing purpose <Route path="/UploadFile" component={UploadFile}/>
             <Route path="/" component={Home}/>
             <Route component={Error}/>
           </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
