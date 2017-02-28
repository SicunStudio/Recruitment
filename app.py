from flask import Flask, render_template
from flask import redirect, url_for, request, session, make_response
import sqlite3,os


app = Flask(__name__)

@app.route('/', methods = ['GET'])
def index():
    return render_template("index.html")

@app.route('/page/', methods = ['GET'])
def page():
    return render_template("enroll.html")

@app.route('/enroll/', methods = ['POST', 'GET'])
def enroll():
    db = sqlite3.connect(os.path.join(app.root_path,"test.db"))
    db.execute('insert into test values(?,?,?,?,?,?,?,?)',
    [request.form['name'], request.form['sex'],request.form['major'],
    request.form['contact'],request.form['firstWill'],request.form['secondWill'],
    request.form['adjustable'],request.form['selfintroduce']])
    db.commit()
    return render_template("index.html")


@app.route('/introduce/',methods = ['GET'])
def introduce():
    return render_template("introduce.html")

if __name__ == '__main__':
    app.run(debug=True)
