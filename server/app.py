from flask import Flask
from models.db_connect import db
from flask_migrate import Migrate
from config import config
from views import main_view

def create_app():

    app = Flask(__name__)

    app.config.from_object(config) # config에서 가져온 파일 사용하기
    db.init_app(app) #SQLAlchemy 객체를 app객체와 이어줌.
    migrate = Migrate()
    migrate.init_app(app, db)
    
    app.register_blueprint(main_view.bp)
    

    return app
if __name__ == '__main__':
    create_app().run(debug=True)
