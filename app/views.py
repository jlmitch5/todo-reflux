from flask import render_template, jsonify, request, Response

from app import app, db

from models import Todo

@app.route('/', defaults={'path': ''})
def index(path):
    return render_template('index.html')

@app.route('/todos/', methods=['GET', 'POST'])
def todos():
    if request.method == 'POST':
        title = request.json.get('todo')
        todo = Todo(title, False)
        db.session.add(todo)
        db.session.commit()
        return Response("ok", status=200, mimetype='application/json')
    else:
        todos = Todo.query.all()
        todos_as_json = []

        for todo in todos:
            todos_as_json.append({
                    'title': todo.title,
                    'isChecked': todo.is_completed,
                    'key': todo.id
                })
        return jsonify(todos=todos_as_json)
