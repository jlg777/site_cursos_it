// Obtener el ID del registro desde el almacenamiento local
var registroId = localStorage.getItem("registroId");

if (registroId) {
    // Obtener los datos del registro desde la API
    var registroUrl = "https://registro-1258a-default-rtdb.europe-west1.firebasedatabase.app/id/" + registroId + ".json";
    fetch(registroUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        // Obtener el nombre y apellido del registro
        var nombreApellido = data.nombreyapellido;

        // Mostrar el mensaje de bienvenida
        document.getElementById("bienvenido").textContent = "Bienvenido " + nombreApellido;

        // Obtener el curso del registro
        var curso = data.Curso;
      

        // Obtener los datos del curso desde la API
        var cursosUrl = "https://appweb-ff96f-default-rtdb.firebaseio.com/cursos.json";
        fetch(cursosUrl)
          .then(function(response) {
            return response.json();
          })
          .then(function(cursosData) {
            // Buscar el curso que coincida con el nombre del curso del registro
            for (var key in cursosData) {
              if (cursosData.hasOwnProperty(key) && cursosData[key].nombrecurso === curso) {
                var cursoEncontrado = cursosData[key];
                
               
                  
                // Mostrar los datos del curso
                 mostrarDatosCurso(cursoEncontrado);
                break;
              }
            }
          })

      })
    }else {
        // Si no se encuentra el ID del registro en el almacenamiento local, redirigir a login.html
        window.location.href = 'login';
      }

      function mostrarDatosCurso(curso) {
        var cursoContainer = document.createElement("div");
        cursoContainer.innerHTML = `
          <h2>${curso.nombrecurso}</h2>
          <img src="${curso.imagen}" alt="${curso.nombrecurso}">
          
        `;
        document.body.appendChild(cursoContainer);
      }

      // Obtener el ID del registro desde la URL
     var urlParams = new URLSearchParams(window.location.search);
     var registroId = urlParams.get("id");

     // Generar la URL de profile.html con el ID del registro
     var profileUrl = "profile";

     // Obtener el botón de perfil y agregar el evento click
     var perfilButton = document.getElementById("perfilButton");
     perfilButton.addEventListener("click", function() {
       // Abrir "profile.html" en una ventana flotante
       window.open(profileUrl, "Perfil", "width=600,height=400");
     });