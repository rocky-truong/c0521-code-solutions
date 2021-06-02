var $h1 = document.querySelector('h1');
var timerId = 3;

setInterval(countDown, 1000);

function countDown() {
  if (timerId === 0) {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    return;
  }
  $h1.textContent = timerId;
  timerId--;
}

clearInterval(5);
