import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <App title="Maalausopas aloittelijalle"/>
  </Router>,  
  document.getElementById('root')
);