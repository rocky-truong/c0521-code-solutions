var $body = document.querySelector('.body');
var $switch = document.querySelector('.switch');
var isOn = false;

function bulbHandler(event) {
  if (isOn === false) {
    isOn = true;
    $body.className = 'body on';
    $switch.className = 'switch on';
  } else if (isOn === true) {
    isOn = false;
    $body.className = 'body off';
    $switch.className = 'switch off';
  }
}

$switch.addEventListener('click', bulbHandler);
