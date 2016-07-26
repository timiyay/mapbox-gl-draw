var transformFeatureCoordinates = require('../lib/transform_feature_coordinates');
var constrainLongitude = require('../lib/constrain_longitude');

module.exports = function(featureCoordinates) {
  if (!featureCoordinates || !featureCoordinates.length) return featureCoordinates;
  return transformFeatureCoordinates(featureCoordinates, ([lng, lat]) => {
    return [constrainLongitude(lng), lat];
  });
}
