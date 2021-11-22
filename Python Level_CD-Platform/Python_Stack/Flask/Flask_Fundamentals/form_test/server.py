""" 
from flask import Flask, render_template, request, redirect  # solicitud agregada
app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/users', methods=['post'])
def create_user():
    print("Got Post Info")
    print(request.form)
    name_form = request.form['name']
    email_form = request.form['email']
    return render_template("show.html", name=name_form, email=email_form)


if __name__ == "__main__":
    app.run(debug=True)
 """

""" # no olvides importar redirect!
from flask import Flask, render_template, request, redirect
app = Flask(__name__)


@app.route('/users', methods=['POST'])
def create_user():
    print("Got Post Info")
    print(request.form)
    name = request.form['name']
    email = request.form['email']
    return redirect("/show")  # cambiada este linea!

# agregar este método

@app.route("/show")
def show_user():
    print("Showing the User Info From the Form")
    print(request.form)
    return render_template("show.html")
"""


## SESION ##
from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
# asignar una clave secreta por motivos de seguridad
app.secret_key = 'keep it secret, keep it safe'


@app.route('/users', methods=['POST'])
def create_user():
    print("Got Post Info")
    # Aqui agregamos dos propiedades a la sesion para almacenar el nombre y el correo electrónico
    session['username'] = request.form['name']
    session['useremail'] = request.form['email']
    return redirect('/show')


@app.route('/show')
def show_user():
    return render_template('show.html', name_on_template=session['username'], email_on_template=session['useremail'])


@app.route('/show')
def show_user():
    return render_template('show.html')
