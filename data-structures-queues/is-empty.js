/* exported isEmpty */

function isEmpty(queue) {
  const first = queue.peek();
  if (first === undefined) {
    return true;
  }
  return false;
}
