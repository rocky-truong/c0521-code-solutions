/* exported chunk */

function chunk(array, size) {
  if (array.length === 0) {
    return [];
  }
  var count = 0;
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i === 0) {
      newArray.push([]);
      newArray[count].push(array[i]);
    } else if (newArray[count].length < size) {
      newArray[count].push(array[i]);
    } else if (newArray[count].length === size) {
      count++;
      newArray.push([]);
      newArray[count].push(array[i]);
    }
  }
  return newArray;
}
