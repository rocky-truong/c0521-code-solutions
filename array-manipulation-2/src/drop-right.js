/* exported dropRight */
function dropRight(array, count) {
  var newArray = [];
  if (array.length === 0) {
    return [];
  }
  var stopIndex = array.length - count;
  for (var i = 0; i < stopIndex; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
