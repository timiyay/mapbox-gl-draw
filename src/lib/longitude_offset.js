module.exports = function(lng) {
  const round = (lng < 0) ? Math.floor : Math.ceil;
  return round(lng / 360) * -360;
}
