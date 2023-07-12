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
    return render_template("home1.html")

@app.route('/about2')
def about2():
    return render_template("home2.html")

@app.route('/about3')
def about3():
    return render_template("home3.html")

@app.route('/about4')
def about4():
    return render_template("home4.html")

@app.route('/admin')
def admin():
    return render_template("admin_put.html")

@app.route('/admin2')
def admin2():
    return render_template("admin_post.html")


@app.route('/admin3')
def admin3():
    return render_template("registro.html")


@app.route('/login')
def login():
    return render_template("login.html")

@app.route('/user')
def user():
    return render_template("user.html")

@app.route('/profile')
def profile():
    return render_template("profile.html")

# validamos si estamos en el archivo principal para que siempre se quede
# escuchando una peticion del usuario y si se cumple ejecuta el app.run
if __name__ == '__main__':
    app.run(debug=True)   # avisamos que estamos en un entorno de prueba
                          # y se actualiza el servidor automáticamente....
