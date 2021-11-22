from flask import Flask, render_template, redirect, session
app = Flask(__name__)
app.secret_key = 'admin'
app.secret_key = 'ThisIsSecret'
app.count = 0

@app.route('/')
def index():
    if 'count' not in session:
        session['count'] = 1
    else:
        session['count'] += 1
    print(session['count'])
    return render_template("index.html", count=session['count'])

@app.route('/add')
def add():
    session['count'] += 1
    print(session['count'])
    return redirect("/")

@app.route('/destroy_session')
def reset():
    session.clear()
    return redirect("/")

@app.route('/increment', methods=['POST'])
def increment_by_two():
    session['count'] += 1
    # We only increment by 1 since reloading the page also increments
    return redirect('/')

@app.route('/clear', methods=['POST'])
def clear():
    session['count'] = 0
    return redirect('/')


if __name__ == "__main__":
    app.run(debug=True)
