from flask import Flask, render_template
app = Flask(__name__)


@app.route('/chess')
def chess():
    return render_template("index.html")


@app.route('/chess/<x>/<y>')
def chess_variables(x, y):
    return render_template("index.html", x=int(x), y=int(y))


if __name__ == "__main__":
    app.run(debug=True)
