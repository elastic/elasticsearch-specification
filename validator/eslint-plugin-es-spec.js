import singleKeyDict from './rules/single-key-dictionary-key-is-string.js'
import invalidNodeTypes from './rules/invalid-node-types.js'

export default {
  rules: {
    'single-key-dictionary-key-is-string': singleKeyDict,
    'invalid-node-types': invalidNodeTypes,
  }
}
