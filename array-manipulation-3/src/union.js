/* exported union */
function union(first, second) {
  const newArray = first;
  for (let i = 0; i < second.length; i++) {
    if (!first.includes(second[i])) {
      newArray.push(second[i]);
    }
  }
  return newArray;
}
