/* exported getLength */

function getLength(list) {
  let counter = 1;
  while (list.next) {
    list = list.next;
    counter++;
  }
  return counter;
}
