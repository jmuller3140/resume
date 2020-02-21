import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import {Header} from '../components/Header';
import RouteList from './RouteList';

import './index.css';

///////////////////////////////////////////////////////////
/* authRoutes returns the routes dynamically generated */
///////////////////////////////////////////////////////////
const Routes = () => (
  <Router>
    <div>
      <Header />
      <RouteList/>
    </div>
  </Router>
);




export default Routes
