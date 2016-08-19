const vows = require('./vows')
module.exports = {
  'currentVow': vows['01'],
  'rotationQuantity': Object.keys(vows).length
}