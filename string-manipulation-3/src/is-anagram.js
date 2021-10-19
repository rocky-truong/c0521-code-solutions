/* exported isAnagram */
function isAnagram(firstString, secondString) {
  let newFirstString = '';
  let newSecondString = '';
  for (let i = 0; i < firstString.length; i++) {
    if (firstString[i] === ' ') {
      continue;
    }
    newFirstString = newFirstString + firstString[i];
  }
  for (let k = 0; k < secondString.length; k++) {
    if (secondString[k] === ' ') {
      continue;
    }
    newSecondString = newSecondString + secondString[k];
  }
  if (newFirstString.length !== newSecondString.length) {
    return false;
  }
  for (let j = 0; j < newSecondString.length; j++) {
    if (newSecondString[j] === ' ') {
      continue;
    }
    if (newFirstString.includes(newSecondString[j])) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
