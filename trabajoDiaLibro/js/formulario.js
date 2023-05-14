   // Obtener el formulario por su ID
   var form = document.getElementById("myForm");

   // Agregar un evento de escucha para el envío del formulario
   form.addEventListener("submit", function(event) {
       event.preventDefault(); // Evitar el envío del formulario por defecto

       // Obtener los valores de los campos del formulario
       var name = document.getElementById("name").value;
       var email = document.getElementById("email").value;
       var message = document.getElementById("message").value;

       // Realizar las validaciones necesarias
       if (name === "" || email === "" || message === "") {
           alert("Por favor, complete todos los campos del formulario.");
           return;
       }

       // Realizar alguna acción con los datos del formulario
       alert("Formulario enviado:\n\nNombre: " + name + "\nEmail: " + email + "\nMensaje: " + message);

       // Restablecer el formulario
       form.reset();
   });