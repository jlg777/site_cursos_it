document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario automáticamente

    var url = "https://registro-1258a-default-rtdb.europe-west1.firebasedatabase.app/id.json";

    var emailInput = document.getElementById("form3Example3cg").value;


    // Realizar la petición GET a la API para verificar el DNI
    fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // Verificar si el DNI existe en algún registro
      var emailExiste = false;
      for (var key in data) {
        if (data.hasOwnProperty(key) && data[key].email === emailInput) {
          emailExiste = true;
          break;
        }   
      }


      var datos = {
        email: emailInput,
        nombreyapellido: document.getElementById("form3Example1cg").value,
        contrasenia: document.getElementById("form3Example4cg").value,
        Curso: " "
      };
      
      if (emailExiste) {
        alert("El número de DNI ya existe en un registro.");
      } else {
        // Realizar la petición POST a la API para guardar los datos de registro
        fetch(url, {
          method: "POST",
          body: JSON.stringify(datos)
          })
          .then(function(response) {
          alert("Registro exitoso!");
          // Restablecer el formulario
          document.getElementById("registroForm").reset();

          // Redirigir al usuario a login.html
          window.location.href = "login.html";
        })
        .catch(function(error) {
          alert("Ha ocurrido un error. Por favor, intenta nuevamente.");
          console.error(error);
        });
      } 


    })
    .catch(function(error) {
      alert("Ha ocurrido un error. Por favor, intenta nuevamente.");
      console.error(error);
    });

});