/* exported toObject */
function toObject(keyValuePair) {
  var first = keyValuePair[0];
  var second = keyValuePair[1];
  return { [first]: second };
}
