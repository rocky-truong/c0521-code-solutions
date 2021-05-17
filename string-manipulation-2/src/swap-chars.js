/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var newWord = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newWord += string[secondIndex];
    } else if (i === secondIndex) {
      newWord += string[firstIndex];
    } else {
      newWord += string[i];
    }
  }
  return newWord;
}
