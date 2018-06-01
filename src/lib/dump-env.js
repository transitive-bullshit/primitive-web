/**
 * Log high-level debugging info about the environment.
 */

import bowser from 'bowser'

import api from 'lib/api'
import debug from 'lib/debug'

debug('environment', {
  apiBaseUrl: api.baseUrl,
  browser: `${bowser.name}@${bowser.version}`,
  env: process.env.NODE_ENV,
  appName: process.env.REACT_APP_NAME,
  appVersion: process.env.REACT_APP_VERSION,
  gaTrackingId: process.env.REACT_APP_GA_TRACKING_ID,
  location: window.location
})
