/* exported omit */
function omit(source, keys) {
  var result = source;
  for (var i = 0; i < keys.length; i++) {
    if (result[keys[i]] !== undefined) {
      delete result[keys[i]];
    }
  }
  return result;
}
