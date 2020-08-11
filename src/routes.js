import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Home from './Views/Home'

export default () => (
  <Router>
    <Switch>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  </Router>
)
