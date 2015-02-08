from datetime import datetime

from flask import render_template, jsonify, request, Response
from sqlalchemy import desc

from app import app, db

from models import Todo

@app.route('/', defaults={'path': ''})
def index(path):
    return render_template('index.html')

@app.route('/todo/', methods=['POST'])
def create_todo():
    title = request.json.get('todo')
    todo = Todo(title, False, datetime.now())
    todo.save()
    return jsonify(**todo.as_json)

@app.route('/todo/<int:todo_id>/', methods=['PATCH'])
def update_todo(todo_id):
    todo = Todo.query.get(todo_id)
    todo.update(request.get_json())
    return Response(status=204, mimetype='application/json')

@app.route('/todo/<int:todo_id>/', methods=['DELETE'])
def delete_todo(todo_id):
    todo = Todo.query.get(todo_id)
    todo.delete()
    return Response(status=204, mimetype='application/json')

@app.route('/todos/', methods=['GET'])
def get_todos():
    todos = Todo.query.order_by(desc(Todo.created_at))
    todos_as_json = []

    for todo in todos:
        todos_as_json.append({
                'title': todo.title,
                'is_checked': todo.is_checked,
                'created_at': todo.created_at,
                'key': todo.id
            })
    return jsonify(todos=todos_as_json)

@app.route('/todos/', methods=['PATCH'])
def check_todos():
    todo_data = request.json.get_json()
    todos = Todo.query.all()
    for todo in todos:
        todo.update(todo_data)
    return Response(status=204, mimetype='application/json')

