import React from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'

import Home from './Views/Home'
import Loading from './Views/Loading'
import Search from './Views/Search/Search.container'
import Stadistics from './Views/Stadistics/Stadistics.container'

export default () => (
  <Switch>
    <Route exact path='/' component={Loading} />
    <Route path='/home' component={Home} />
    <Route path='/search' component={Search} />
    <Route path='/stadistics' component={Stadistics} />
  </Switch>
)
