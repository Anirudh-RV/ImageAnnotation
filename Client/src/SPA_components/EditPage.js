import React,{ useState}  from 'react';
import './App.css';

import NavigationBar from './NavigationBar'
import WorkingArea from './WorkingArea'
import Footer from './Footer'

   const EditPage = () => (
    <body>
        <NavigationBar />
        <WorkingArea />
        <Footer />
    </body>
   );

   export default EditPage;
