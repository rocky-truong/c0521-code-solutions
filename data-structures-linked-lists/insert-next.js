/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const newList = new LinkedList(list);
  list.next = value;
  newList.next = list;
  return newList;
}
