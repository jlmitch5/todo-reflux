from app import db, managers

class Todo(db.Model, managers.ModelManager):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), index=True, unique=False)
    is_completed = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime)

    def __init__(self, title, is_completed, created_at):
        self.title = title
        self.is_completed = is_completed
        self.created_at = created_at

    def __repr__(self):
        return '<Todo %s>' % self.title
