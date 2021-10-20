/* exported flatten */
function flatten(array) {
  const newArray = [];
  if (array.length === 0) {
    return newArray;
  }
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j]);
      }
      continue;
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
