/* exported getKeys */
function getKeys(object) {
  var arrayKey = [];
  var key;
  for (key in object) {
    arrayKey.push(key);
  }
  return arrayKey;
}
