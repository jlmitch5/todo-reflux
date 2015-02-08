from app import db, managers

class Todo(db.Model, managers.ModelManager):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(255), index=True, unique=False)
    is_checked = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime)

    def __init__(self, title, is_checked, created_at):
        self.title = title
        self.is_checked = is_checked
        self.created_at = created_at

    @property
    def as_json(self):
        return {
            'title': self.title,
            'isChecked': self.is_checked,
            'createdAt': self.created_at,
            'key': self.id
        }

    def __repr__(self):
        return '<Todo %s>' % self.title
