'use strict'

const { injectBabelPlugin } = require('react-app-rewired')

module.exports = (config, env) => {
  // add decorator support
  config = injectBabelPlugin('transform-decorators-legacy', config)

  // antd support (https://ant.design/docs/react/use-with-create-react-app)
  config = injectBabelPlugin([
    'import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css'
    }
  ], config)

  // remove enforced pre-eslint validation during dev
  const eslintIndex = config.module.rules.findIndex(getEslintRule)
  if (eslintIndex >= 0) {
    config.module.rules = config.module.rules
      .slice(0, eslintIndex)
      .concat(config.module.rules.slice(eslintIndex + 1))
  }

  return config
}

function getEslintRule (rule) {
  const { enforce, use } = rule
  return (enforce === 'pre' && use && use[0] && use[0].loader)
}
