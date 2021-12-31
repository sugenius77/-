from flask import Flask
from models.db_connect import db
from flask_migrate import Migrate
from config import config

from controller import food_recommend
from flask_cors import CORS
from controller import worldcup

def create_app():
    
   
    app = Flask(__name__)
    
    @app.errorhandler(400)
    def bad_request(error):
        app.logger.error(error)
        return "<h1>400 Bad Request</h1>", 400
    
    @app.errorhandler(404)
    def page_not_found(error):
        app.logger.error(error)
        return "<h1>404 Not Found</h1>", 404
    
    @app.errorhandler(500)
    def internal_server_error(error):
        app.logger.error(error)
        return "<h1>500 Internal Server Error</h1>", 500
    
    app.config['JSON_AS_ASCII'] = False # 한글깨짐 방지
    app.config.from_object(config) # config에서 가져온 파일 사용하기
    db.init_app(app) #SQLAlchemy 객체를 app객체와 이어줌.
    migrate = Migrate()
    migrate.init_app(app, db)
    
    app.register_blueprint(food_recommend.food)
    app.register_blueprint(main_view.bp)
    app.register_blueprint(worldcup.worldcup)

    app.register_blueprint(worldcup.worldcup)

    return app
if __name__ == '__main__':
    create_app().run(debug=True)
