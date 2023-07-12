document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario automáticamente

    var emailInput = document.getElementById("email").value;
    var contraseniaInput = document.getElementById("contrasenia").value;
    var url = "https://registro-1258a-default-rtdb.europe-west1.firebasedatabase.app/id.json";

    // Realizar la petición GET a la API para obtener los registros
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var registroEncontrado = false;
        var registroId;

        // Buscar el registro que coincida con el DNI y la contraseña ingresados
        for (var key in data) {
          if (data.hasOwnProperty(key) && data[key].email === emailInput && data[key].contrasenia === contraseniaInput) {
            registroEncontrado = true;
            registroId = key;
            break;
          }
        }

        if (registroEncontrado) {
          // Guardar el ID del registro en el almacenamiento local
          localStorage.setItem("registroId", registroId);

          // Redirigir a alumnoscookies.html
          window.location.href = "user";
        } else {
          alert("Credenciales inválidas. Por favor, intenta nuevamente.");
        }
      })
      
  });