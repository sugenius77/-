from flask import Blueprint, jsonify, request
from ..util.FoodService import FoodService

food = Blueprint('foodrecommend', __name__, url_prefix='/food')
food_service = FoodService()

# 날씨, 요일, 시간 별 업종 추천
@food.route('/recommendation',methods=['GET'])
def get_recommendation(): 
    global food_service

    nx = request.args.get("nx")
    ny = request.args.get("ny")
    weather_result = food_service.weather_recommendation(nx,ny)
    date_result = food_service.date_recommendation()
    time_result = food_service.time_recommendation()
    result = [weather_result, date_result, time_result]
    return jsonify(result)

     
# 추천 업종의 상세 메뉴 12개
@food.route('/menu',methods=['GET'])
def post_menu():
    kindsID = request.args.get("kindsID")
    result = food_service.menu_post(kindsID)
    return jsonify(result)
   

# 성공 여부만 보여주고, 수정된 좋아요 수는 프론트에서 다시 get 요청하여 보내준다.
# 좋아요 수 증가 
@food.route('/like',methods=['PUT'])
def like_add():
    data = request.get_json()
    food_service.add_like(data)
    return jsonify({"status":200,"message":"update success"})

# 좋아요 수 감소
@food.route('/dislike',methods=['PUT'])
def like_sub():
    data = request.get_json()
    food_service.sub_like(data)
    return jsonify({"status":200,"message":"update success"})


# 수정된 좋아요 수 
@food.route('/like',methods=['GET'])
def get_toggle():
    menuID = request.args.get("menuID")
    result =food_service.toggle_get(menuID)
    return jsonify(result)

    
    
