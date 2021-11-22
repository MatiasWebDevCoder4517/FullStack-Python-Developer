from flask import Flask, render_template, request, redirect, url_for, flash
# NO SE COMO SOLUCIONAR ESTE ERROR / I DON'T KNOW HOW TO FIX THIS ERROR
from flask_mysqldb import MySQL

# initializations
app = Flask(__name__)

# Mysql Connection
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Matias'
app.config['MYSQL_DB'] = 'pets_db'
mysql = MySQL(app)

# session settings
app.secret_key = "mysecretkey"

# routes functions


@app.route('/')
def index():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM pets')
    data = cur.fetchall()
    cur.close()
    return render_template('index.html', pets=data)


@app.route('/add_pet', methods=['POST'])
def add_pet():

    # ADD_PET VALIDATION
    is_valid = True
    if len(request.form['name']) < 1:
        is_valid = False
        flash("Please enter a Pet Name! ")
        return redirect(url_for('index'))
    if len(request.form['age']) < 1:
        is_valid = False
        flash("Please enter the Pet Age")
        return redirect(url_for('index'))
    if len(request.form['type']) < 1:
        is_valid = False
        flash("Please enter the Pet type! ")
        return redirect(url_for('index'))
    if not is_valid:
        cur = mysql.connection.cursor()
        return redirect(url_for('index'))
    else:
        if request.method == 'POST':
            name = request.form['name']
            age = request.form['age']
            type = request.form['type']
            cur = mysql.connection.cursor()
            cur.execute(
                "INSERT INTO pets (name, age, type) VALUES (%s,%s,%s)", (name, age, type))
            mysql.connection.commit()
            flash('Pet Added successfully')
            return redirect(url_for('index'))


@app.route('/edit/<id>', methods=['POST', 'GET'])
def get_pets(id):
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM pets WHERE idpets = {}".format(id))
    data = cur.fetchall()
    cur.close()
    print(data[0])
    return render_template('update_pet.html', pet=data[0])


@app.route('/update/<id>', methods=['POST'])
def update_pet(id):
    # UPDATE VALIDATION ##
    is_valid = True
    if len(request.form['name']) < 1:
        is_valid = False
        flash("Update failed, Please enter a new Pet Name! ")
        return redirect(url_for('index'))
    if len(request.form['age']) < 1:
        is_valid = False
        flash("Update failed, Please enter the new Pet Age")
        return redirect(url_for('index'))
    if len(request.form['type']) < 1:
        is_valid = False
        flash("Updated failed, Please enter the new Pet type! ")
        return redirect(url_for('index'))
    if not is_valid:
        cur = mysql.connection.cursor()
        return redirect(url_for('index'))
    else:
        if request.method == 'POST':
            name = request.form['name']
            age = request.form['age']
            type = request.form['type']
            cur = mysql.connection.cursor()
            cur.execute("""
                UPDATE pets
                SET name = %s,
                    age = %s,
                    type = %s
                WHERE idpets = %s
            """, (name, age, type, id))
            flash('Pet Updated Successfully')
            mysql.connection.commit()
            return redirect(url_for('index'))


@app.route('/delete/<string:id>', methods=['POST', 'GET'])
def delete_pet(id):
    cur = mysql.connection.cursor()
    cur.execute('DELETE FROM pets WHERE idpets = {0}'.format(id))
    mysql.connection.commit()
    flash('Pet Removed Successfully')
    return redirect(url_for('index'))


# starting the app
if __name__ == "__main__":
    app.run(port=5000, debug=True)
