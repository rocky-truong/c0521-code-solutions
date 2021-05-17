/* exported firstChars */
function firstChars(length, string) {
  var revisedWord = '';
  if (string === '') {
    return '';
  }
  for (var i = 0; i < length; i++) {
    if (string[i] === undefined) {
      return revisedWord;
    }
    revisedWord += string[i];
  }
  return revisedWord;
}
