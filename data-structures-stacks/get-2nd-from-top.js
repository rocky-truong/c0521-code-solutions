/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return undefined;
  }
  const firstFromTop = stack.pop();
  if (stack.peek() === undefined) {
    stack.push(firstFromTop);
    return undefined;
  }
  const secondFromTop = stack.pop();
  stack.push(secondFromTop);
  stack.push(firstFromTop);
  return secondFromTop;
}
