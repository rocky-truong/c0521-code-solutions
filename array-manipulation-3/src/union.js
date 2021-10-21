/* exported union */
function union(first, second) {
  for (let i = 0; i < second.length; i++) {
    if (!first.includes(second[i])) {
      first.push(second[i]);
    }
  }
  return first;
}
