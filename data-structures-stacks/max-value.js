/* exported maxValue */

function maxValue(stack) {
  if (!stack.peek()) {
    return -Infinity;
  }
  let currentValue = null;
  let highestValue = null;
  while (stack.peek() !== undefined) {
    currentValue = stack.pop();
    if (highestValue === null) {
      highestValue = currentValue;
    }
    if (currentValue > highestValue) {
      highestValue = currentValue;
    }
  }
  return highestValue;
}
