import React from 'react';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router'
import * as login from './Login'

export default (
  <Router history={ browserHistory } >
    <Route path="/">
      <IndexRoute component={login.Main}/>
      <Route path='/login' component={login.Main}/>
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
