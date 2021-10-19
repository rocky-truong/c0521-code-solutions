/* exported reverseWords */
function reverseWords(string) {
  let currentString = '';
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      currentString += string[i];
    }
    if (string[i] === ' ' || i === string.length - 1) {
      for (let j = currentString.length - 1; j >= 0; j--) {
        newString += currentString[j];
      }
      if (string[i] === ' ') {
        newString += ' ';
      }
      currentString = '';
    }
  }
  return newString;
}
