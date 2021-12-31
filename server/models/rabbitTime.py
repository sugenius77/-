from app import db
from datetime import datetime
    
class rabbitTime(db.Model):
    __tablename__ ='rabbitTime'

    id = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    time_slot = db.Column(db.String(10), nullable=False)