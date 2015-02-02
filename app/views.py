from datetime import datetime

from flask import render_template, jsonify, request, Response
from sqlalchemy import desc

from app import app, db

from models import Todo

@app.route('/', defaults={'path': ''})
def index(path):
    return render_template('index.html')

@app.route('/todos/', defaults={'todo_id': ''}, methods=['GET', 'POST'])
@app.route('/todos/<int:todo_id>/', methods=['DELETE', 'PUT'])
def todos(todo_id):
    if request.method == 'POST':
        title = request.json.get('todo')
        todo = Todo(title, False, datetime.now())
        todo.save()
        return Response("ok", status=200, mimetype='application/json')

    if request.method == 'DELETE' and todo_id:
        todo = Todo.query.get(todo_id)
        todo.delete()
        return Response('', status=204, mimetype='application/json')

    if request.method == 'PUT' and todo_id:
        todo = Todo.query.get(todo_id)
        todo.is_completed = not todo.is_completed
        todo.save()
        return Response('', status=204, mimetype='application/json')
    else:
        todos = Todo.query.order_by(desc(Todo.created_at))
        todos_as_json = []

        for todo in todos:
            todos_as_json.append({
                    'title': todo.title,
                    'isChecked': todo.is_completed,
                    'createdAt': todo.created_at,
                    'key': todo.id
                })
        return jsonify(todos=todos_as_json)

@app.route('/todos/check-all/', methods=['PUT'])
def check_todos():
    todos = Todo.query.all()
    for todo in todos:
        todo.is_completed = True
        todo.save()
    return Response("ok", status=200, mimetype='application/json')

