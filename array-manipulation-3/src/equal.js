/* exported equal */
function equal(first, second) {
  for (let i = 0; i <= first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
