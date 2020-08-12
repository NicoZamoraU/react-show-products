import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import 'regenerator-runtime/runtime'
import CssBaseline from '@material-ui/core/CssBaseline'

import allReducers from './reducers'
import rootSaga from './sagas'
import Routes from './routes'

const sagaMiddleware = createSagaMiddleware()
const history = createBrowserHistory({})

const store = createStore(
  combineReducers(allReducers),
  applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(rootSaga)

// history.replace('/')

store.dispatch({ type: 'INIT_SAGA', history })

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline />
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('app'),
)
