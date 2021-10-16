/* exported isAnagram */
function isAnagram(firstString, secondString) {
  for (let i = 0; i < firstString.length; i++) {
    if (secondString.includes(firstString[i])) {
      continue;
    } else {
      return false;
    }
  }
  // for (let j = 0; j < secondString.length; j++) {
  //   if (firstString.includes(secondString[j])) {
  //     continue;
  //   } else {
  //     return false;
  //   }
  // }
  return true;
}
