from app import db

class ModelManager(object):

    def save(self, commit=True):
        db.session.add(self)
        if commit:
            db.session.commit()
        else:
            return self

    def delete(self, commit=True):
        db.session.delete(self)
        if commit:
            db.session.commit()
