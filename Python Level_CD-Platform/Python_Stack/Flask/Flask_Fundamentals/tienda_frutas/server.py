import datetime
from flask import Flask, render_template, request, redirect
app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/checkout', methods=['POST'])
def checkout():
    print(request.form)
    print("--POST INFO OBTAINED--")
    print("Firstname:", request.form['firstname'])
    print("Lastname:", request.form['lastname'])
    print("Student ID:", request.form['studentid'])
    print("Dojo:", request.form['dojo'])
    print("Apples:", request.form['apples'])
    print("Strawberries:", request.form['strawberries'])
    print("Blackberries:", request.form['blackberries'])
    print("Raspberries:", request.form['raspberries'])

    firstname = request.form['firstname']
    lastname = request.form['lastname']
    studentid = request.form['studentid']
    dojo = request.form['dojo']
    apples = request.form['apples']
    strawberries = request.form['strawberries']
    blackberries = request.form['blackberries']
    raspberries = request.form['raspberries']

    now = datetime.datetime.now()
    timestamp = now.strftime("%d-%m-%Y , %H:%M")
    return render_template("checkout.html", firstname=firstname, lastname=lastname, studentid=int(studentid), dojo=dojo, apples=int(apples), strawberries=int(strawberries),
                           blackberries=int(blackberries), raspberries=int(raspberries), timestamp=timestamp)


""" @app.route('/fruits', methods=['POST'])
def fruits():
    print(request.form)
    print("--POST INFO OBTAINED--")
    print("Apples:", request.form['apples'])
    print("Strawberries:", request.form['strawberries'])
    print("Blackberries:", request.form['blackberries'])
    print("Raspberries:", request.form['raspberries'])

    apples = request.form['apples']
    strawberries = request.form['strawberries']
    blackberries = request.form['blackberries']
    raspberries = request.form['raspberries']

    return render_template("fruits.html", apples=int(apples), strawberries=int(strawberries),
                           blackberries=int(blackberries), raspberries=int(raspberries))
 """


@app.route('/fruits')
def fruits():
    print(request.form)

    return render_template("fruits.html")


if __name__ == "__main__":
    app.run(debug=True)
