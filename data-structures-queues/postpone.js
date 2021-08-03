/* exported postpone */

function postpone(queue) {
  const front = queue.peek();
  if (front === undefined) {
    return;
  }
  const sentToBack = queue.dequeue();
  queue.enqueue(sentToBack);
}
