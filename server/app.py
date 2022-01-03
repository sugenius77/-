from flask import Flask
from models.db_connect import db
from flask_migrate import Migrate
from config import config
<<<<<<< HEAD
=======
from controller import food_recommend
from flask_cors import CORS
>>>>>>> 73c409d5cd5b2000b351c5ce6a49f478956c0805
from controller import worldcup

def create_app():
    
   
    app = Flask(__name__)
    app.config['JSON_AS_ASCII'] = False # 한글깨짐 방지
    CORS(app)
    app.config.from_object(config) # config에서 가져온 파일 사용하기
    db.init_app(app) #SQLAlchemy 객체를 app객체와 이어줌.
    migrate = Migrate()
    migrate.init_app(app, db)
    
<<<<<<< HEAD
=======
    app.register_blueprint(food_recommend.food)
>>>>>>> 73c409d5cd5b2000b351c5ce6a49f478956c0805
    app.register_blueprint(worldcup.worldcup)

    return app
if __name__ == '__main__':
    create_app().run(debug=True)
