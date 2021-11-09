/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  let topValue = queue.dequeue();
  if (queue.peek() === undefined) {
    return topValue;
  }
  while (topValue > queue.peek()) {
    queue.enqueue(topValue);
    topValue = queue.dequeue();
  }
  if (topValue < queue.peek()) {
    return topValue;
  }
}
