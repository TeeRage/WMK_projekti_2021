import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

ReactDOM.render(
  <Router>
    <App title="Maalausopas aloittelijalle"/>
  </Router>,
  document.getElementById('root')
);