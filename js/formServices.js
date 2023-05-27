const btnServices = document.getElementById('enviar');

document.getElementById('servicios')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btnServices.value = 'Enviando...';
 
   const serviceID = 'default_service';
   const templateID = 'template_ve8ronq';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btnServices.value = 'Solicitar servicio';
      alert('Servicio solicitado con éxito!');
    }, (err) => {
      btnServices.value = 'Solicitar servicio';
      alert(JSON.stringify(err));
    });
});