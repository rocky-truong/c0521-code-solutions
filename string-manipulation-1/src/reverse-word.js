/* exported reverseWord */
function reverseWord(word) {
  var newWord = '';
  var lastIndex = word.length - 1;
  for (var i = lastIndex; i >= 0; i--) {
    newWord += word[i];
  }
  return newWord;
}
