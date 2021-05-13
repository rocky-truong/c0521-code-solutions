/* exported oddOrEven */
function oddOrEven(array) {
  var converted = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      converted.push('even');
    } else if (array[i] % 2 === 1) {
      converted.push('odd');
    }
  }
  return converted;
}
