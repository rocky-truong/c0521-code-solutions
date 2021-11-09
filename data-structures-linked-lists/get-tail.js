/* exported getTail */

function getTail(list) {
  let value = null;
  if (!list.next) {
    return list.data;
  }
  while (list.next) {
    value = list.next.data;
    list = list.next;
  }
  return value;
}
