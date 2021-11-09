/* exported swapFront */

function swapFront(list) {
  if (!list.next) {
    return list;
  }
  const second = list.next;
  list.next = list.next.next;
  second.next = list;
  return second;
}
