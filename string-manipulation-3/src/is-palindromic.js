/* exported isPalindromic */
function isPalindromic(string) {
  let oldString = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      continue;
    }
    oldString = oldString + string[i];
  }
  let newString = '';
  const lastLetter = oldString.length - 1;
  for (let i = lastLetter; i >= 0; i--) {
    newString = newString + oldString[i];
  }
  if (newString === oldString) {
    return true;
  } else {
    return false;
  }
}
