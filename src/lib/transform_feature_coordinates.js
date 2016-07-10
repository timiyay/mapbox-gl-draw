module.exports = function transformFeatureCoordinates(coordinatesValue, transform) {
  if (Array.isArray(coordinatesValue[0])) {
    return coordinatesValue.map(subValue => transformFeatureCoordinates(subValue.slice(), transform));
  }
  return transform(coordinatesValue.slice());
};
