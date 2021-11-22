from flask import Flask, render_template, request, redirect, url_for, flash
# NO SE COMO SOLUCIONAR ESTE ERROR / I DON'T KNOW HOW TO FIX THIS ERROR
from flask_mysqldb import MySQL
import datetime


# EMAIL VALIDATION
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

# initializations
app = Flask(__name__)

# Mysql Connection
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Matias'
app.config['MYSQL_DB'] = 'califications_bdd'
mysql = MySQL(app)

# session settings
app.secret_key = "admin"

# routes functions


@app.route('/')
def index():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM students')
    data = cur.fetchall()
    cur.close()
    return render_template('index.html', students=data)


@app.route('/add_student', methods=['POST'])
def add_student():

    # ADD_STUDENTS VALIDATION
    is_valid = True
    if len(request.form['firstname']) < 1:
        is_valid = False
        flash("Please enter a Student First Name! ")
        return redirect(url_for('index'))
    if len(request.form['lastname']) < 1:
        is_valid = False
        flash("Please enter a Student Last Name! ")
        return redirect(url_for('index'))
    if len(request.form['year']) < 1:
        is_valid = False
        flash("Please enter the Student Year !")
        return redirect(url_for('index'))
    if not is_valid:
        cur = mysql.connection.cursor()
        return redirect(url_for('index'))
    else:
        if request.method == 'POST':
            firstname = request.form['firstname']
            lastname = request.form['lastname']
            year = request.form['year']
            cur = mysql.connection.cursor()
            cur.execute(
                "INSERT INTO students (firstname, lastname, year) VALUES ('{}','{}','{}')".format(firstname, lastname, year))
            mysql.connection.commit()
            flash('Student Added successfully')
            return redirect(url_for('index'))


@app.route('/go_grade', methods=['GET'])
def go_grade():
    return render_template('grades.html')


@app.route('/go_report', methods=['GET'])
def go_report():
    return render_template('report_card.html')


@app.route('/add_grade', methods=['POST', 'GET'])
def add_grade():

    # ADD_GRADE VALIDATION
    is_valid = True
    if len(request.form['idstudent']) < 1:
        is_valid = False
        flash("Please enter a Student ID! ")
        return redirect(url_for('index'))
    if len(request.form['course']) < 1:
        is_valid = False
        flash("Please enter a Course! ")
        return redirect(url_for('index'))
    if len(request.form['grade']) < 1:
        is_valid = False
        flash("Please enter a Grade Name !")
        return redirect(url_for('index'))
    if len(request.form['comments']) < 1:
        is_valid = False
        flash("Please enter a Comment! ")
        return redirect(url_for('index'))
    if not is_valid:
        cur = mysql.connection.cursor()
        return redirect(url_for('index'))
    else:
        if request.method == 'POST':
            idstudent = request.form['idstudent']
            course = request.form['course']
            grade = request.form['grade']
            date = request.form['date']
            comments = request.form['comments']
            cur = mysql.connection.cursor()
            cur.execute(
                "INSERT INTO grades (idstudents, course, grade, date, comments) VALUES ('{}','{}','{}','{}','{}')".format(idstudent, course, grade, date, comments))
            mysql.connection.commit()
            flash('Grade Added successfully')
            return redirect(url_for('index'))


@app.route('/report/<id>', methods=['POST', 'GET'])
def get_grades(id):
    cur = mysql.connection.cursor()
    cur.execute(
        "SELECT * FROM grades WHERE idgrades = {}".format(id))
    data = cur.fetchall()
    cur.close()
    print(data[0])
    return render_template('report_card.html', grade=data[0])


@app.route('/update/<id>', methods=['POST'])
def update_grade(id):
    # UPDATE VALIDATION ##
    is_valid = True
    if len(request.form['fname']) < 1:
        is_valid = False
        flash("Update failed, Please enter a new Student First Name! ")
        return redirect(url_for('index'))
    if len(request.form['lname']) < 1:
        is_valid = False
        flash("Update failed, Please enter the new Student Last Name")
        return redirect(url_for('index'))
    if len(request.form['year']) < 1:
        is_valid = False
        flash("Updated failed, Please enter the new Student Year! ")
        return redirect(url_for('index'))
    if not is_valid:
        cur = mysql.connection.cursor()
        return redirect(url_for('index'))
    else:
        if request.method == 'POST':
            fname = request.form['fname']
            lname = request.form['lname']
            year = request.form['year']
            cur = mysql.connection.cursor()
            cur.execute("""
                UPDATE grades
                SET firstname = '{}',
                    lastname = '{}',
                    year = '{}'
                WHERE idstudents = '{}'
            """.format(fname, lname, year, id))
            flash('Grade Updated Successfully')
            mysql.connection.commit()
            return redirect(url_for('index'))


@app.route('/edit/<id>', methods=['POST', 'GET'])
def get_students(id):
    cur = mysql.connection.cursor()
    cur.execute(
        "SELECT * FROM students WHERE idstudents = {}".format(id))
    data = cur.fetchall()
    cur.close()
    print(data[0])
    return render_template('update_student.html', student=data[0])


@app.route('/update/<id>', methods=['POST'])
def update_student(id):
    # UPDATE VALIDATION ##
    is_valid = True
    if len(request.form['fname']) < 1:
        is_valid = False
        flash("Update failed, Please enter a new Student First Name! ")
        return redirect(url_for('index'))
    if len(request.form['lname']) < 1:
        is_valid = False
        flash("Update failed, Please enter the new Student Last Name")
        return redirect(url_for('index'))
    if len(request.form['year']) < 1:
        is_valid = False
        flash("Updated failed, Please enter the new Student Year! ")
        return redirect(url_for('index'))
    if not is_valid:
        cur = mysql.connection.cursor()
        return redirect(url_for('index'))
    else:
        if request.method == 'POST':
            fname = request.form['fname']
            lname = request.form['lname']
            year = request.form['year']
            cur = mysql.connection.cursor()
            cur.execute("""
                UPDATE students
                SET firstname = '{}',
                    lastname = '{}',
                    year = '{}'
                WHERE idstudents = '{}'
            """.format(fname, lname, year, id))
            flash('Student Updated Successfully')
            mysql.connection.commit()
            return redirect(url_for('index'))


@app.route('/delete/<string:id>', methods=['POST', 'GET'])
def delete_student(id):
    cur = mysql.connection.cursor()
    cur.execute('DELETE FROM students WHERE idstudents = {0}'.format(id))
    mysql.connection.commit()
    flash('Student Removed Successfully')
    return redirect(url_for('index'))


@app.route('/delete/<string:id>', methods=['POST', 'GET'])
def delete_grade(id):
    cur = mysql.connection.cursor()
    cur.execute('DELETE FROM grades WHERE idgrades = {0}'.format(id))
    mysql.connection.commit()
    flash('Grade Removed Successfully')
    return redirect(url_for('index'))


# starting the app
if __name__ == "__main__":
    app.run(port=5000, debug=True)
