import React from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'

import Home from './Views/Home'
import Loading from './Views/Loading'
import Search from './Views/Search/Search.container'

export default () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/search' component={Search} />
  </Switch>
)
