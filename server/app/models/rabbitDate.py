from app import db

class rabbitDate(db.Model):
    __tablename__ ='rabbitDate'

    id = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    date_name = db.Column(db.String(10), nullable=False)