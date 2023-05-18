const btn = document.getElementById('enviar');

document.getElementById('servicios')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_nd71yok';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Solicitar servicio';
      alert('Solicitud de servicio enviada!');
    }, (err) => {
      btn.value = 'Solicitar servicio';
      alert(JSON.stringify(err));
    });
});