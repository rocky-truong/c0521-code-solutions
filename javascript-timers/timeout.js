var $h1 = document.querySelector('h1');

function text() {
  $h1.textContent = 'Hello There';
}

setTimeout(text, 2000);
