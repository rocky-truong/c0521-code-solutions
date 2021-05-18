/* exported capitalizeWords */
function capitalizeWords(string) {
  var newWord = '';
  var lowerCase = string.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    if ((i === 0) || (string[(i - 1)] === ' ')) {
      newWord += lowerCase[i].toUpperCase();
    } else if (string[i] === ' ') {
      newWord += string[i];
    } else if (string[i] !== ' ') {
      newWord += lowerCase[i];
    }
  }
  return newWord;
}
