var $h1 = document.querySelector('h1');
var timerId = null;
var count = 4;
function countDown() {
  count--;
  if (count > 0) {
    $h1.textContent = count;
  } else {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(timerId);
  }
}

timerId = setInterval(countDown, 1000);
