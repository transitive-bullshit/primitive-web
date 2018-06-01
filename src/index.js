/**
 * React application entrypoint.
 */

// global styles
import './styles/global.css'

// log high-level debugging info about environment
import './lib/dump-env'

// third-party dependencies
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

// mount react app
ReactDOM.render(<App />, document.getElementById('root'))
