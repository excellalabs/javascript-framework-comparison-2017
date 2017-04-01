
module.exports = (port) => {
  try {
    let opn = require('opn')
    if (typeof opn === 'function') {
      opn(`http://localhost:${port}/`)
    }
  } catch (e) {
    // Do nothing
  }
}