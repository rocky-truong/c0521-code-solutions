var $letter = document.querySelectorAll('span');
var currentLetter = 0;

function keyHandler(event) {
  if (event.key === $letter[currentLetter].textContent) {
    $letter[currentLetter].className = 'letter correct';
    $letter[currentLetter + 1].className = 'letter current';
    currentLetter++;
  } else {
    $letter[currentLetter].className = 'letter incorrect';
  }
}

document.addEventListener('keydown', keyHandler);
