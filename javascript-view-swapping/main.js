var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $allView = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', tabHandler);

function tabHandler(event) {
  if (!event.target.matches('.tab')) {
    return;
  }
  for (var i = 0; i < $tab.length; i++) {
    if (event.target !== $tab[i]) {
      $tab[i].className = 'tab';
    } else {
      $tab[i].className = 'tab active';
    }
  }

  var dataView = event.target.getAttribute('data-view');

  for (var x = 0; x < $allView.length; x++) {
    if ($allView[x].getAttribute('data-view') !== dataView) {
      $allView[x].className = 'view hidden';
    } else {
      $allView[x].className = 'view';
    }
  }
}
