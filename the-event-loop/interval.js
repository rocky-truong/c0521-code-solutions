let currentCount = 3;
const timerId = setInterval(() => {
  if (currentCount === 0) {
    console.log('Blast off!');
    clearInterval(timerId);
    return;
  }
  console.log(currentCount);
  currentCount--;
}, 1000);
