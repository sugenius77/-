from app import db
from datetime import datetime
from rabbitDate import rabbitDate

class rabbitDateRanking(db.Model):
    __tablename__ ='rabbitDateRanking'

    id = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    kinds_id = db.Column(db.Integer, db.ForeignKey('rabbitKinds.id'), nullable=False)
    date_id = db.Column(db.Integer, db.ForeignKey('rabbitDate.id'), nullable=False)
    date_rank =db.Column(db.Integer, nullable=True)