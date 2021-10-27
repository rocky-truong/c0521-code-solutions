/* exported zip */
function zip(first, second) {
  const newArray = [];
  const lastIndex = Math.min(first.length, second.length);
  for (let i = 0; i < lastIndex; i++) {
    newArray.push([first[i], second[i]]);
  }
  return newArray;
}
