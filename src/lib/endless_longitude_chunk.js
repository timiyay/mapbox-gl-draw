module.exports = function(coordinates) {
  if (!coordinates) return null;
  const lng = getFirstLng(coordinates);
  const round = (lng < 0) ? Math.floor : Math.ceil;
  return round(lng / 540);
};

function getFirstLng(x) {
  if (Array.isArray(x[0])) {
    return getFirstLng(x);
  }
  return x[0];
}
