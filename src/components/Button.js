import '../icons/loading'
import config from 'veui/managers/config'

config.defaults({
  icons: {
    loading: 'loading'
  },
  ui: {
    style: {
      values: ['alt', 'primary']
    },
    role: {
      values: ['link']
    },
    size: {
      values: ['large', 'small']
    },
    shape: {
      values: ['round', 'square']
    }
  }
}, 'button')
