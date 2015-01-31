from application import app
from flask import render_template, jsonify

@app.route('/', defaults={'path': ''})
def index(path):
    return render_template('index.html')

@app.route('/todos/')
def todos():
    return jsonify(todos=[
            {
                'title': "Discuss report with John",
                'isChecked': False,
                'key': 1
            },
            {
                'title': "Get a haircut",
                'isChecked': True,
                'key': 2
            },
            {
                'title': "Pay electricity bill",
                'isChecked': True,
                'key': 3
            },
            {
                'title': "Check gym hours",
                'isChecked': False,
                'key': 4
            }
        ])
