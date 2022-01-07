from app import db

class rabbitWeatherRanking(db.Model):
    __tablename__ ='rabbitWeatherRanking'

    id = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    kinds_id = db.Column(db.Integer, db.ForeignKey('rabbitKinds.id'), nullable=False)
    weather_id = db.Column(db.Integer, db.ForeignKey('rabbitWeather.id'), nullable=False)
    weather_rank =db.Column(db.Integer, nullable=True)