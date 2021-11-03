/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (!stack.peek()) {
    return undefined;
  }
  const firstFromTop = stack.pop();
  let secondFromTop = null;
  if (!stack.peek()) {
    stack.push(firstFromTop);
    return undefined;
  }
  if (stack.peek()) {
    secondFromTop = stack.peek();
  }
  stack.push(firstFromTop);
  return secondFromTop;
}
