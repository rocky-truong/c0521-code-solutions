var $leftArrow = document.querySelector('.fa-chevron-left');
var $rightArrow = document.querySelector('.fa-chevron-right');
var $allView = document.querySelectorAll('.view');
var $allDotView = document.querySelectorAll('.dotView');
var $dots = document.querySelector('.dots');
var currentView = '1';
var timerId = setInterval(handleRight, 3000);

$leftArrow.addEventListener('click', handleLeft);
$rightArrow.addEventListener('click', handleRight);
$dots.addEventListener('click', handleDot);

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

function handleDot(event) {
  if (event.target.tagName === 'I') {
    var newView = event.target.closest('.dotView').getAttribute('data-view)');
    console.log(newView);
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
}

// function handleDot1(event) {
//   $dot1.className = 'dotView fas fa-circle fa-lg';
//   $dot2.className = 'dotView far fa-circle fa-lg';
//   $dot3.className = 'dotView far fa-circle fa-lg';
//   $dot4.className = 'dotView far fa-circle fa-lg';
//   $dot5.className = 'dotView far fa-circle fa-lg';

//   var newView = '1';

// for (var i = 0; i < $allView.length; i++) {
//   if ($allView[i].getAttribute('data-view') === newView) {
//     $allView[i].className = 'view';
//   } else {
//     $allView[i].className = 'view hidden';
//   }
// }

//   currentView = newView;
//   clearInterval(timerId);
//   timerId = setInterval(handleRight, 3000);
// }
