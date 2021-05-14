/* exported getWords */
function getWords(string) {
  if (string.length === 0) {
    return [];
  }
  var separateString = string.split(' ');
  return separateString;
}
