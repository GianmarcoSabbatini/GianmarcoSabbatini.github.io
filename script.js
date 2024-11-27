document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-form").addEventListener("submit", function (event) {
      event.preventDefault();
      const btn = document.getElementById("cta-clean");
  
      const serviceID = "service_x8gwyya";
      const templateID = "template_q91jflq";
  
      emailjs.sendForm(serviceID, templateID, this).then(
        () => {
          btn.textContent = "Invia Email";
          alert("Inviato con successo!");
        },
        (err) => {
          btn.textContent = "Invia Email";
          alert(`Errore: ${JSON.stringify(err)}`);
        }
      );
    });
  });
  