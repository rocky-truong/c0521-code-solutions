/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  if (!list.next) {
    return;
  }
  while (list.next) {
    list = list.next;
  }
  list.next = new LinkedList(value);
}
