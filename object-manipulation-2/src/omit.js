/* exported omit */
function omit(source, keys) {
  var result = {};
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] === undefined) {
      result[keys[i]] = source[keys[i]];
    }
  }
  return result;
}
