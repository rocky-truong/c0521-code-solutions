var $openModalButton = document.querySelector('.open-modal-button');
var $body = document.querySelector('.body');
var $noButton = document.querySelector('.no-button');
var $modal = document.querySelector('.modal');

function modalHandler(event) {
  $modal.className = 'modal';
  $body.className = 'body dimmed';
  $openModalButton.className = 'open-modal-button dimmer';
}

$openModalButton.addEventListener('click', modalHandler);

function noHandler(event) {
  $modal.className = 'modal hidden';
  $body.className = 'body';
  $openModalButton.className = 'open-modal-button';
}

$noButton.addEventListener('click', noHandler);
