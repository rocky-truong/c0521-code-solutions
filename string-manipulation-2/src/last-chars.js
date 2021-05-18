/* exported lastChars */
function lastChars(length, string) {
  var newWord = '';
  var firstIndex = string.length - length;
  if (string === '') {
    return '';
  }
  if (length > string.length) {
    return string;
  }
  for (var i = firstIndex; i < string.length; i++) {
    newWord += string[i];
  }
  return newWord;
}
