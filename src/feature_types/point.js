var Feature = require('./feature');
var constrainLongitude = require('../lib/constrain_longitude');

var Point = function(ctx, geojson) {
  Feature.call(this, ctx, geojson);
};

Point.prototype = Object.create(Feature.prototype);

Point.prototype.isValid = function() {
  return typeof this.coordinates[0] === 'number'
    && typeof this.coordinates[1] === 'number';
};

Point.prototype.updateCoordinate = function(pathOrLng, lngOrLat, lat) {
  if (arguments.length === 3) {
    this.coordinates = [constrainLongitude(lngOrLat), lat];
  } else {
    this.coordinates = [constrainLongitude(pathOrLng), lngOrLat];
  }
  this.changed();
};

Point.prototype.getCoordinate = function() {
  return this.getCoordinates();
};

module.exports = Point;
