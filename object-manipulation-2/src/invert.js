/* exported invert */
function invert(source) {
  const result = {};
  for (const [key, value] of Object.entries(source)) {
    result[value] = key;
  }
  return result;
}
