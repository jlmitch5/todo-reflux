from app import db
from app.models import Todo

db.create_all()

#setup first todos
todos = [
            ('Discuss report with John', False), 
            ('Get a haircut', True), 
            ('Pay electricity bill', True), 
            ('Check gym hours', False)
        ]

for todo in todos:
    t = Todo(todo[0], todo[1])
    db.session.add(t)

db.session.commit()

if len(Todo.query.all()) == 4:
    print "4 Todos saved to db"

