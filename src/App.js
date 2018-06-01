/**
 * @class App
 */

import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomePage from './routes/HomePage'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />

          <Route render={() => (<div> TODO: 404 page </div>)} />
        </Switch>
      </Router>
    )
  }
}
