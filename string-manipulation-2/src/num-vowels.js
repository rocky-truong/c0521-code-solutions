/* exported numVowels */
function numVowels(string) {
  var currentCount = 0;
  if (string.length === 0) {
    return 0;
  }
  for (var i = 0; i < string.length; i++) {
    if (string[i] === 'A' || string[i] === 'a' || string[i] === 'E' || string[i] === 'e' || string[i] === 'I' || string[i] === 'i' || string[i] === 'O' || string[i] === 'o' || string[i] === 'U' || string[i] === 'u') {
      currentCount += 1;
    }
  }
  return currentCount;
}
