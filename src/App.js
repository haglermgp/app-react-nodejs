import React from 'react';
import ReactDOM from 'react-dom';
import routes from './js/routes';
require('./sass/material.sass');

ReactDOM.render(
  routes,
  document.getElementById('app')
)
