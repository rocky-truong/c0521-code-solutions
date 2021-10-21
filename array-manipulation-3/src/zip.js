/* exported zip */
function zip(first, second) {
  const newArray = [];
  for (let i = 0; i < first.length; i++) {
    if (!second[i]) {
      break;
    }
    newArray.push([first[i], second[i]]);
  }
  return newArray;
}
