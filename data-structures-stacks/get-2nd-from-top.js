/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const firstTop = stack.pop();
  const peek = stack.peek();
  if (firstTop !== undefined) {
    stack.push(firstTop);
  }
  return peek;
}
