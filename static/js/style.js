fetch('https://estilos-8b8e7-default-rtdb.firebaseio.com/styles.json')//(Uniform Resource Identifier, “Identificador uniforme de recursos”)
  .then(response => response.json())
  .then(data => {
    const cardhover = data.card; // Obtén el valor de "hover" de la clave "card"

   

    Object.entries(cardhover).forEach(([property, value]) => {
      document.documentElement.style.setProperty(`--card-${property}`, value);
    });
    
  })
  .catch(error => {
    console.error('Error al obtener los datos de la API:', error);
  });
  