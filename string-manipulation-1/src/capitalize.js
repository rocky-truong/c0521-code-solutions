/* exported capitalize */
function capitalize(word) {
  var upperCase = word[0].toUpperCase();
  var convertedWord = '';
  for (var i = 1; i < word.length; i++) {
    convertedWord += word[i].toLowerCase();
  }
  return upperCase + convertedWord;
}
