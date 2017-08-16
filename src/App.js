import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import routes from './js/routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
require('./sass/material.sass');

export default class App extends Component{

  render() {
    return(
      <MuiThemeProvider>
        {routes}
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)
