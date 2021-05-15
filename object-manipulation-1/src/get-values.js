/* exported getValues */
function getValues(object) {
  var arrayValues = [];
  var key;
  for (key in object) {
    arrayValues.push(object[key]);
  }
  return arrayValues;
}
