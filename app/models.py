from app import db

class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), index=True, unique=False)
    is_completed = db.Column(db.Boolean, default=False)

    def __init__(self, title, is_completed):
        self.title = title
        self.is_completed = is_completed

    def __repr__(self):
        return '<Todo %s>' % self.title
