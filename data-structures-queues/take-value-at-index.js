/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  // const copy = queue;
  let storage = null;
  for (var i = 0; i < index; i++) {
    storage = queue.dequeue();
    if (i !== index) {
      queue.enqueue(storage);
    }
    if (i === index) {
      return storage;
    }
  }
}
