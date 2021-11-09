/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  const firstValue = queue.dequeue();
  if (queue.peek() === undefined) {
    return firstValue;
  }
  const secondValue = queue.dequeue();
  if (firstValue > secondValue) {
    queue.enqueue(firstValue);
    return secondValue;
  }
  if (secondValue > firstValue) {
    queue.enqueue(secondValue);
    return firstValue;
  }
  if (firstValue === secondValue) {
    queue.enqueue(firstValue);
    return secondValue;
  }
}
