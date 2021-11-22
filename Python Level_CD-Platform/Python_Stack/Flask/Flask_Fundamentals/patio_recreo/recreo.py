from flask import Flask, render_template  # added render_template!
app = Flask(__name__)

# LEVEL 1
@app.route('/play')
def play_game():
    return render_template("index.html")

# LEVEL 2
@app.route('/play/<x>')
def play_game2(x):
    return render_template("index.html", x=int(x))


# FIX THIS !
''' # LEVEL 3
@app.route('/play/<x>/<color>')
def play_game3(x, color):
    return render_template("index.html", x = int(x), color = color)
'''

if __name__ == "__main__":
    app.run(debug=True)
