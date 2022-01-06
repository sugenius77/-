from app import db

class rabbitKinds(db.Model):
    __tablename__ ='rabbitKinds'

    id = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    kinds_name = db.Column(db.String(10), nullable=False)