from flask import Flask

app = Flask(__name__)

## hello world ##
''' @app.route('/')
def show_hello():
    return "Hello !!"
'''
## Dojo ##
''' @app.route('/dojo')
def show_dojo():
    return "Dojo !!"
'''
# say/name
'''
@app.route('/say/<name>')
def show_name(name):
    # aplicar para Flask, Michael y John (cambiar var 'name' en el URL)
    return "Say my Name! ---> {} !!".format(name)
'''

# repeat/num/name  AND NINJA CHALLENGE
'''
@app.route('/repeat/<num>/<name>')
def repeat_name(name, num):
    count = 0
    while count < int(num):
        count += 1
        # print("I am {}!!!!!".format(name))
    return f"\nI am {name}!!!\n"*int(num)
# APLICAR PARA 'name' ==> 'hello', 'bye' y 'perros' (35,80,99) respectivamente
'''

# CHALLENGE SENSEI
''' @app.route('/repeat/<num>/<name>')

def repeat_name(name, num):
    count = 0
    while count < int(num):
        count += 1
    # print("I am {}!!!!!".format(name))
    return f"\nI am {name}!!!\n"*int(num)

## FIX THIS !
def correct_route(url):
    if (url != '/repeat/<num>/<name>'):
        return "Please enter the right url!"
 '''

if __name__ == "__main__":   # Asegúrese de que este archivo se ejecute directamente y no desde un módulo diferente
    app.run(debug=True)    # ejecuta la aplicación en modo depuración
