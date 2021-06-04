var $leftArrow = document.querySelector('.fa-chevron-left');
var $rightArrow = document.querySelector('.fa-chevron-right');
var $allView = document.querySelectorAll('.view');
var $allDotView = document.querySelectorAll('.dotView');
var $dot1 = document.getElementById('1');
var $dot2 = document.getElementById('2');
var $dot3 = document.getElementById('3');
var $dot4 = document.getElementById('4');
var $dot5 = document.getElementById('5');
var currentView = '1';
var timerId = setInterval(handleRight, 3000);

$leftArrow.addEventListener('click', handleLeft);
$rightArrow.addEventListener('click', handleRight);
$dot1.addEventListener('click', handleDot1);
$dot2.addEventListener('click', handleDot2);
$dot3.addEventListener('click', handleDot3);
$dot4.addEventListener('click', handleDot4);
$dot5.addEventListener('click', handleDot5);

function handleLeft(event) {
  var newViewInt = parseInt(currentView) - 1;
  if (newViewInt === 0) {
    newViewInt = 5;
  }
  var newView = newViewInt.toString();

  for (var i = 0; i < $allView.length; i++) {
    if ($allView[i].getAttribute('data-view') === newView) {
      $allView[i].className = 'view';
    } else {
      $allView[i].className = 'view hidden';
    }
  }

  for (var j = 0; j < $allDotView.length; j++) {
    if ($allDotView[j].getAttribute('data-view') === newView) {
      $allDotView[j].className = 'dotView fas fa-circle fa-lg';
    } else {
      $allDotView[j].className = 'dotView far fa-circle fa-lg';
    }
  }

  currentView = newView;
  clearInterval(timerId);
  timerId = setInterval(handleRight, 3000);
}

function handleRight(event) {
  var newViewInt = parseInt(currentView) + 1;
  if (newViewInt === 6) {
    newViewInt = 1;
  }
  var newView = newViewInt.toString();

  for (var i = 0; i < $allView.length; i++) {
    if ($allView[i].getAttribute('data-view') === newView) {
      $allView[i].className = 'view';
    } else {
      $allView[i].className = 'view hidden';
    }
  }

  for (var j = 0; j < $allDotView.length; j++) {
    if ($allDotView[j].getAttribute('data-view') === newView) {
      $allDotView[j].className = 'dotView fas fa-circle fa-lg';
    } else {
      $allDotView[j].className = 'dotView far fa-circle fa-lg';
    }
  }

  currentView = newView;
  clearInterval(timerId);
  timerId = setInterval(handleRight, 3000);
}

function handleDot1(event) {
  $dot1.className = 'dotView fas fa-circle fa-lg';
  $dot2.className = 'dotView far fa-circle fa-lg';
  $dot3.className = 'dotView far fa-circle fa-lg';
  $dot4.className = 'dotView far fa-circle fa-lg';
  $dot5.className = 'dotView far fa-circle fa-lg';

  var newView = '1';

  for (var i = 0; i < $allView.length; i++) {
    if ($allView[i].getAttribute('data-view') === newView) {
      $allView[i].className = 'view';
    } else {
      $allView[i].className = 'view hidden';
    }
  }

  currentView = newView;
  clearInterval(timerId);
  timerId = setInterval(handleRight, 3000);
}

function handleDot2(event) {
  $dot1.className = 'dotView far fa-circle fa-lg';
  $dot2.className = 'dotView fas fa-circle fa-lg';
  $dot3.className = 'dotView far fa-circle fa-lg';
  $dot4.className = 'dotView far fa-circle fa-lg';
  $dot5.className = 'dotView far fa-circle fa-lg';

  var newView = '2';

  for (var i = 0; i < $allView.length; i++) {
    if ($allView[i].getAttribute('data-view') === newView) {
      $allView[i].className = 'view';
    } else {
      $allView[i].className = 'view hidden';
    }
  }

  currentView = newView; clearInterval(timerId);
  timerId = setInterval(handleRight, 3000);
}

function handleDot3(event) {
  $dot1.className = 'dotView far fa-circle fa-lg';
  $dot2.className = 'dotView far fa-circle fa-lg';
  $dot3.className = 'dotView fas fa-circle fa-lg';
  $dot4.className = 'dotView far fa-circle fa-lg';
  $dot5.className = 'dotView far fa-circle fa-lg';

  var newView = '3';

  for (var i = 0; i < $allView.length; i++) {
    if ($allView[i].getAttribute('data-view') === newView) {
      $allView[i].className = 'view';
    } else {
      $allView[i].className = 'view hidden';
    }
  }

  currentView = newView;
  clearInterval(timerId);
  timerId = setInterval(handleRight, 3000);
}

function handleDot4(event) {
  $dot1.className = 'dotView far fa-circle fa-lg';
  $dot2.className = 'dotView far fa-circle fa-lg';
  $dot3.className = 'dotView far fa-circle fa-lg';
  $dot4.className = 'dotView fas fa-circle fa-lg';
  $dot5.className = 'dotView far fa-circle fa-lg';

  var newView = '4';

  for (var i = 0; i < $allView.length; i++) {
    if ($allView[i].getAttribute('data-view') === newView) {
      $allView[i].className = 'view';
    } else {
      $allView[i].className = 'view hidden';
    }
  }

  currentView = newView;
  clearInterval(timerId);
  timerId = setInterval(handleRight, 3000);
}

function handleDot5(event) {
  $dot1.className = 'dotView far fa-circle fa-lg';
  $dot2.className = 'dotView far fa-circle fa-lg';
  $dot3.className = 'dotView far fa-circle fa-lg';
  $dot4.className = 'dotView far fa-circle fa-lg';
  $dot5.className = 'dotView fas fa-circle fa-lg';

  var newView = '5';

  for (var i = 0; i < $allView.length; i++) {
    if ($allView[i].getAttribute('data-view') === newView) {
      $allView[i].className = 'view';
    } else {
      $allView[i].className = 'view hidden';
    }
  }

  currentView = newView;
  clearInterval(timerId);
  timerId = setInterval(handleRight, 3000);
}
