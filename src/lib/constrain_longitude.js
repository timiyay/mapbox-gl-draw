const Constants = require('../constants');
const longitudeOffset = require('./longitude_offset');

module.exports = function(lng) {
  if (lng < Constants.LNG_MIN || lng > Constants.LNG_MAX) {
    return lng + longitudeOffset(lng);
  }
  return lng;
}
