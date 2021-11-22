from flask import Flask, render_template, request, redirect, url_for, flash
# NO SE COMO SOLUCIONAR ESTE ERROR / I DON'T KNOW HOW TO FIX THIS ERROR
from flask_mysqldb import MySQL

# EMAIL VALIDATION
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

# initializations
app = Flask(__name__)

# Mysql Connection
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Matias'
app.config['MYSQL_DB'] = 'email_bdd'
mysql = MySQL(app)

# session settings
app.secret_key = "email_secret_key"

# routes functions
@app.route('/')
def index():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM emails')
    data = cur.fetchall()
    cur.close()
    return render_template('index.html', emails=data)


@app.route('/add_email', methods=['POST'])
def add_email():

    # ADD_Email VALIDATION 1
    is_valid = True
    if len(request.form['email']) < 1:
        is_valid = False
        flash("Please enter a Email ")
        return redirect(url_for('index'))
    elif not EMAIL_REGEX.match(request.form['email']):
        flash("Email must be a valid address!", 'email')
        return redirect(url_for('index'))
    if not is_valid:
        cur = mysql.connection.cursor()
        return redirect(url_for('index'))

    else:
        if request.method == 'POST':
            email = request.form['email']
            cur = mysql.connection.cursor()
            cur.execute(
                "INSERT INTO emails (email) VALUES ('{}')".format(email))
            mysql.connection.commit()
            flash('Email Added successfully')
            return redirect(url_for('index'))


@app.route('/edit/<id>', methods=['POST', 'GET'])
def get_emails(id):
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM emails WHERE idemails = {}".format(id))
    data = cur.fetchall()
    cur.close()
    print(data[0])
    return render_template('update_email.html', email=data[0])


@app.route('/update/<id>', methods=['POST'])
def update_email(id):
    # UPDATE VALIDATION 1 #
    is_valid = True
    if len(request.form['email']) < 1:
        is_valid = False
        flash("Update failed, Please enter a new Email! ")
        return redirect(url_for('index'))
    elif not EMAIL_REGEX.match(request.form['email']):
        flash("Email must be a valid address!", 'email')
        return redirect(url_for('index'))
    if not is_valid:
        cur = mysql.connection.cursor()
        return redirect(url_for('index'))

    else:
        if request.method == 'POST':
            email = request.form['email']
            cur = mysql.connection.cursor()
            cur.execute("""
                UPDATE emails
                SET email = %s
                WHERE idemails = %s
            """, (email, id))
            flash('Email Updated Successfully')
            mysql.connection.commit()
            return redirect(url_for('index'))


@app.route('/delete/<string:id>', methods=['POST', 'GET'])
def delete_email(id):
    cur = mysql.connection.cursor()
    cur.execute('DELETE FROM emails WHERE idemails = {0}'.format(id))
    mysql.connection.commit()
    flash('Email Removed Successfully')
    return redirect(url_for('index'))


# starting the app
if __name__ == "__main__":
    app.run(port=5000, debug=True)
