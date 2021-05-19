var $form = document.getElementById('contact-form');

function handleSubmit(event) {
  event.preventDefault();
  var messageData = {
    name: $form.elements.name.value,
    email: $form.elements.email.value,
    message: $form.elements.message.value
  };
  console.log('messageData:', messageData);
  $form.reset();
}

$form.addEventListener('submit', handleSubmit);
