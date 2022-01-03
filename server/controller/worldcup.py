from flask import Blueprint , request, jsonify
from models.rabbitMenu import rabbitMenu, db
from sqlalchemy.sql.expression import func

worldcup = Blueprint('worldcup', __name__, url_prefix='/worldcup')
status_code ={'success':200, 'bad_request':400, 'server_error':500}

'''
    GET 요청시
    전체 메뉴 식별자와 메뉴의 랭킹, 이미지 주소 반환

    PUT 요청시
    선택된 메뉴의 레이팅 향상
    
'''
@worldcup.route('/rank',methods=['GET','PUT'])
def rank():

    if request.method == 'GET':
        ranking_list = rabbitMenu.query\
            .order_by(rabbitMenu.world_ranking.asc())\
            .with_entities(
                rabbitMenu.menu_name,
                rabbitMenu.world_ranking,
                rabbitMenu.image_url
            ).all()
        ranking_list =dict((a,[b,c]) for a,b,c in ranking_list)

        return jsonify(ranking_list)

    if request.method == 'PUT':
        menu_name = request.get_json()['menu_name']
        rating = rabbitMenu.query\
            .filter(rabbitMenu.menu_name == menu_name)\
            .first()

        rating.world_rating +=1

        db.session.commit()
        return jsonify(status_code['success'])

'''
    GET 요청시
    figma 4-3의 선택된 메뉴의 랭킹이름과 랭킹을 반환.
    요청 예시: server주소/output_rank?menu_name=뿌링클 치킨
'''

@worldcup.route('/output_rank', methods=['GET'])
def output_rank():
    
    if not request.args:
        return jsonify(status_code['bad_request'])
    
    if request.method == 'GET':
        parameter_dict = request.args.to_dict()
        menu_name = parameter_dict['menu_name']
        
        ranking_list = rabbitMenu.query\
            .filter(rabbitMenu.menu_name == menu_name)\
            .with_entities(
                rabbitMenu.menu_name,
                rabbitMenu.world_ranking
            ).first()

        return jsonify(dict(ranking_list))
    
    else:
        return jsonify(status_code['bad_request'])


'''
    GET 요청시
    선택된 월드컵 음식 개수만큼
    메뉴이름과 메뉴 랭킹, image_url을 반환한다.
    요청 예시: server주소/start_rank?round=64
'''

@worldcup.route('/start_rank', methods=['GET'])
def start_rank():
    
    if not request.args:
        return jsonify(status_code['bad_request'])
    
    if request.method == 'GET':
        parameter_dict = request.args.to_dict()
        round = parameter_dict['round']
        
        ranking_list = rabbitMenu.query\
            .with_entities(
                rabbitMenu.menu_name,
                rabbitMenu.world_ranking,
                rabbitMenu.image_url
            ).order_by(func.rand())\
            .limit(int(round))

        ranking_list =dict((a,[b,c]) for a,b,c in ranking_list)

        return jsonify(ranking_list)
    
    else:
        return jsonify(status_code['bad_request'])