from flask import Blueprint , request, jsonify,abort
from ..util.WorldcupService import WorldcupService

worldcup = Blueprint('worldcup', __name__, url_prefix='/worldcup')
status_code ={'success':200, 'bad_request':400, 'server_error':500}
world_service = WorldcupService()

'''
    GET 요청시
    전체 메뉴 식별자와 메뉴의 랭킹, 이미지 주소 반환

    PUT 요청시
    선택된 메뉴의 레이팅 향상
    랭킹의 초기화
    
'''
@worldcup.route('/rank',methods=['GET','PUT'])
def rank():
    global world_service

    if request.method == 'GET':
        ranking_list = world_service.get_world_ranking_list()
        return jsonify(ranking_list)
    
    elif request.method == 'PUT':

        menu_id = request.get_json()['menu_id']
        menu_id = int(menu_id)

        world_service.put_world_rating_increase(menu_id)
        world_service.world_ranking_sort()

        return jsonify({"status_code" : 200, "description": "success" })


'''
    GET 요청시
    figma 4-3의 선택된 메뉴의 랭킹이름과 랭킹을 반환.
    요청 예시: server주소/output_rank?menu_id=1

'''
@worldcup.route('/output_rank', methods=['GET'])
def output_rank():
    
    if not request.args:
        return abort(400,description="Bad Request")
    
    if request.method == 'GET':

        parameter_dict = request.args.to_dict()
        menu_id = parameter_dict['menu_id']
        menu_id = int(menu_id)

        ranking_list = world_service.get_world_food_rank(menu_id)

        return jsonify(dict(ranking_list))
    

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
        round = int(round)
        ranking_list = world_service.get_world_startround(round)

        return jsonify(ranking_list)
    