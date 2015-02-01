from datetime import datetime

from app import db
from app.models import Todo

db.create_all()

#setup first todos
todos = [
            ('Check gym hours', False),
            ('Pay electricity bill', True), 
            ('Get a haircut', True), 
            ('Discuss report with John', False), 
        ]

for todo in todos:
    t = Todo(todo[0], todo[1], datetime.now())
    db.session.add(t)

db.session.commit()

if len(Todo.query.all()) == 4:
    print "4 Todos saved to db"

