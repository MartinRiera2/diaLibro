window.onload = function() {
    // Obtiene el elemento ul que contiene el menú
    var menu = document.getElementById("menu");
  
    // Agrega un evento click a cada elemento li del menú
    var items = menu.getElementsByTagName("li");
    for (var i = 0; i < items.length; i++) {
      items[i].addEventListener("click", function() {
        // Remueve la clase "active" de todos los elementos li
        for (var j = 0; j < items.length; j++) {
          items[j].classList.remove("active");
        }
  
        // Agrega la clase "active" al elemento li seleccionado
        this.classList.add("active");
      });
    }
  };