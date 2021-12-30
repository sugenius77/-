from app import db
from datetime import datetime

class rabbitKinds(db.Model):
    __tablename__ ='rabbitKinds'

    id = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    kinds_name = db.Column(db.String(10), nullable=False)

class rabbitMenu(db.Model):
    __tablename__ ='rabbitMenu'

    id = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    menu_name = db.Column(db.String(20), nullable=False)
    image_url = db.Column(db.String(255), nullable=False)
    toggle_rating = db.Column(db.Integer, nullable=True)
    world_ranking = db.Column(db.Integer, nullable=True)
    kinds_id =db.Column(db.Integer, db.ForeignKey('rabbitKinds.id'), nullable=False)
    
class rabbitWeather(db.Model):
    __tablename__ ='rabbitWeather'

    id = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    weather_name = db.Column(db.String(10), nullable=False)


class rabbitWeatherRanking(db.Model):
    __tablename__ ='rabbitWeatherRanking'

    id = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    kinds_id = db.Column(db.Integer, db.ForeignKey('rabbitKinds.id'), nullable=False)
    weather_id = db.Column(db.Integer, db.ForeignKey('rabbitWeather.id'), nullable=False)
    weather_rank =db.Column(db.Integer, nullable=True)

class rabbitDate(db.Model):
    __tablename__ ='rabbitDate'

    id = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    date_name = db.Column(db.String(10), nullable=False)


class rabbitDateRanking(db.Model):
    __tablename__ ='rabbitDateRanking'

    id = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    kinds_id = db.Column(db.Integer, db.ForeignKey('rabbitKinds.id'), nullable=False)
    date_id = db.Column(db.Integer, db.ForeignKey('rabbitDate.id'), nullable=False)
    date_rank =db.Column(db.Integer, nullable=True)


class rabbitTime(db.Model):
    __tablename__ ='rabbitTime'

    id = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    time_slot = db.Column(db.String(10), nullable=False)


class rabbitTimeRanking(db.Model):
    __tablename__ ='rabbitTimeRanking'

    id = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    kinds_id = db.Column(db.Integer, db.ForeignKey('rabbitKinds.id'), nullable=False)
    time_id = db.Column(db.Integer, db.ForeignKey('rabbitDate.id'), nullable=False)
    time_rank =db.Column(db.Integer, nullable=True)