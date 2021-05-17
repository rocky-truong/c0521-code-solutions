/* exported takeRight */
function takeRight(array, count) {
  var newArray = [];
  if (array.length === 0) {
    return [];
  }
  var startIndex = array.length - count;
  for (var i = startIndex; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
