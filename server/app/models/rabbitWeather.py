from app import db

class rabbitWeather(db.Model):
    __tablename__ ='rabbitWeather'

    id = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    weather_name = db.Column(db.String(10), nullable=False)
