

from flask import Flask, render_template, request, redirect
app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/clients', methods=['POST'])
def dojo_survey_client():
    print("Got Post Info")
    print(request.form)
    name_form = request.form['name']
    dojo_form = request.form['dojo']
    language_form = request.form['language']
    comment_form = request.form['comment']
    return render_template("dojo_survey.html", name=name_form, dojo=dojo_form, language=language_form, comment=comment_form)


if __name__ == "__main__":
    app.run(debug=True)
