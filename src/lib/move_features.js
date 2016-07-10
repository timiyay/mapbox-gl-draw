const xtend = require('xtend');
const constrainFeatureMovement = require('./constrain_feature_movement');
const moveFeatureCoordinates = require('./move_feature_coordinates');
const Constants = require('../constants');

module.exports = function(features, delta) {
  const constrainedDelta = constrainFeatureMovement(features.map(feature => feature.toGeoJSON()), delta);

  features.forEach(feature => {
    const currentCoordinates = feature.getCoordinates();
    const nextCoordinates = moveFeatureCoordinates(currentCoordinates, constrainedDelta);
    feature.incomingCoords(nextCoordinates);
  });
};
