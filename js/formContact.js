const btnContact = document.getElementById('enviarCorreo');

document.getElementById('contactoForm')
 .addEventListener('submit', function(eventContact) {
  eventContact.preventDefault();

   btnContact.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_t3apyvq';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        btnContact.value = 'Enviar mensaje';
      alert('PQRS enviada con éxito!');
    }, (err) => {
        btnContact.value = 'Enviar mensaje';
      alert(JSON.stringify(err));
    });
});