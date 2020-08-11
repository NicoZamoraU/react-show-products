import React, { Component } from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'

import Routes from './routes'

export default class extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Routes />
      </React.Fragment>
    )
  }
}
