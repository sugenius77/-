from flask import Flask
from flask_migrate import Migrate
from models.db_coonect import db
from flask_cors import CORS
from config import config
from views import main_view

def create_app():
    app = Flask(__name__)
    

    app.config.from_object(config) 
    # config에서 가져온 파일 사용하기

    db.init_app(app) 
    #SQLAlchemy 객체를 app객체와 이어줌.
    
    migrate = Migrate()
    migrate.init_app(app,db)
    # db 마이그레이션

    CORS(app)

    app.register_blueprint(main_view.bp)
    # view blueprint 받아오기

    return app


if __name__ =="__main__":
    create_app().run(debug=True)