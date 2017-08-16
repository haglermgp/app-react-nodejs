import React from 'react';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router'
import * as login from './Login'
import * as inicio from './Layout'

export default (
  <Router history={ browserHistory } >
    <Route path="/">
      <IndexRoute component={login.Main}/>
      <Route path='login' component={login.Main}/>
      <Route path='inicio' component={inicio.mainApp}/>

    </Route>
      {/* <Route path="/">
      <Route path="" component={} />
      <Route path="foo" >
      <IndexRoute component={Foo} />
      <Route path="home" component={Home} />
    </Route>
  </Route> */}
  </Router>
)
