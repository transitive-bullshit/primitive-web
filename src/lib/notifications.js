import { message } from 'antd'
import debug from './debug'

export default {
  info: (s) => {
    message.info(s)
  },

  error: (s, err) => {
    debug(s, err)
    message.error(s)
  }
}
