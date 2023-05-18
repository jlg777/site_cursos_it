from flask import Flask, render_template  # llamar al framework
                                          # agregamos el metodo de flask para  utilizar
                                          # lo que hay dentro de la carpeta templates

app = Flask(__name__)  # guarda en una variable la ruta de inicio de la app

# Rutas de procesamiento (direccionan a algun lugar)
@app.route('/')  # método que crea una url
def home():      # función  que devuelve información al navegador
    return render_template("home.html") #retorna el archivo dentro de la carpeta templates

@app.route('/about')
def about():
    return render_template("about.html")

@app.route('/contacts')
def contacts():
    return render_template("contacts.html")

# validamos si estamos en el archivo principal para que siempre se quede
# escuchando una peticion del usuario y si se cumple ejecuta el app.run
if __name__ == '__main__':
    app.run(debug=True)   # avisamos que estamos en un entorno de prueba
                          # y se actualiza el servidor automáticamente....
