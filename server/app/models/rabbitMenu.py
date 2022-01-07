from app import db

class rabbitMenu(db.Model):
    __tablename__ ='rabbitMenu'
    __table_args__ = {'extend_existing': True}
    id = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    menu_name = db.Column(db.String(20), nullable=False)
    image_url = db.Column(db.String(255), nullable=False)
    toggle_rating = db.Column(db.Integer, nullable=True)
    world_rating = db.Column(db.Integer, nullable=True)
    world_ranking = db.Column(db.Integer, nullable=True)
    kinds_id =db.Column(db.Integer, db.ForeignKey('rabbitKinds.id'), nullable=False)