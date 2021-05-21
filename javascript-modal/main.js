var $openModalButton = document.querySelector('.open-modal-button');
var $body = document.querySelector('.body');
var $noButton = document.querySelector('.no-button');
var $openModal = document.querySelector('.modal');

function modalHandler(event) {
  $openModal.className = 'modal';
  $body.className = 'body dimmed';
  $openModalButton.className = 'open-modal-button dimmer';
}

$openModalButton.addEventListener('click', modalHandler);

function closeModal(event) {
  $openModal.className = 'modal hidden';
  $body.className = 'body';
  $openModalButton.className = 'open-modal-button';
}

$noButton.addEventListener('click', closeModal);
