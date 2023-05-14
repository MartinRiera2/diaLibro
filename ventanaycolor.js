function abrirVentanaEmergente() {
    var url = "https://www.google.com"; // URL de la página que deseas abrir
  
    // Configuración opcional para la ventana emergente
    var opciones = "width=500,height=500";
  
    // Abrir la ventana emergente
    window.open(url, "_blank", opciones);
  }

  var btnCambiarColor = document.getElementById("cambiarColor");

// Agregar un evento de clic al botón
btnCambiarColor.addEventListener("click", function() {
  // Cambiar el color de fondo a azul
  document.body.style.backgroundColor = "grey";
});