/* exported capitalizeWord */
function capitalizeWord(word) {
  var js = word.toUpperCase();
  if (js === 'JAVASCRIPT') {
    return 'JavaScript';
  }
  var capLetter = word[0].toUpperCase();
  var restOfWord = '';
  for (var i = 1; i < word.length; i++) {
    restOfWord += word[i].toLowerCase();
  }
  return (capLetter + restOfWord);
}
