/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  let counter = 0;
  while (index >= counter) {
    const topValue = queue.dequeue();
    if (index === counter) {
      return topValue;
    }
    counter++;
    queue.enqueue(topValue);
  }
}
