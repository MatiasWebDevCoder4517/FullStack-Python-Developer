
from flask import Flask, render_template  # added render_template!
app = Flask(__name__)


@app.route('/')
def run_html():
    return render_template('index.html', phrase="hello", times=5)


if __name__ == "__main__":
    app.run(debug=True)
