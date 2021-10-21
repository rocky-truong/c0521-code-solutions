/* exported unique */
function unique(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      newArray.push(array[i]);
      continue;
    }
    if (newArray.includes(array[i])) {
      continue;
    }
    newArray.push(array[i]);
  }
  return newArray;
}
