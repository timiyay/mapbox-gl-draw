const transformFeatureCoordinates = require('./transform_feature_coordinates');

module.exports = function (featureCoordinates, delta) {
  return transformFeatureCoordinates(featureCoordinates, ([lng, lat]) => {
    return [lng + delta.lng, lat + delta.lat];
  });
}
