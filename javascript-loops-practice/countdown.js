/* exported countdown */
function countdown(number) {
  var count = [];
  for (var i = 0; i <= number; i = 0) {
    count.push(number);
    number -= 1;
  }
  return count;
}
