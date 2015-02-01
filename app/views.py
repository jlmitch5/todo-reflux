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
        todo = todo.update(request.json.get('todo'))
        todo.save()
    else:
        todos = Todo.query.order_by(desc(Todo.created_at))
        todos_as_json = []

        for todo in todos:
            todos_as_json.append({
                    'title': todo.title,
                    'isChecked': todo.is_completed,
                    'created_at': todo.created_at,
                    'key': todo.id
                })
        return jsonify(todos=todos_as_json)
