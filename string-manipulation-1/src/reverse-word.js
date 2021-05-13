/* exported reverseWord */
function reverseWord(word) {
  var newWord = '';
  for (var i = 1; i <= word.length; i++) {
    newWord += word[word.length - i];
  }
  return newWord;
}
