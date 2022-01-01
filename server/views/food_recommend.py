from flask import Blueprint,jsonify,request
import json
from datetime import date
import time # time 모듈 임포트
from sqlalchemy.orm import with_expression    
from  models.models import rabbitDate,rabbitDateRanking,rabbitKinds,rabbitMenu,rabbitTimeRanking,rabbitTime,rabbitWeather,rabbitWeatherRanking
from models.db_connect import db 
food = Blueprint('foodrecommend', __name__, url_prefix='/food')

# 날씨, 요일, 시간에 따른 추천 업종
@food.route('/recommend',methods=['GET'])
def get_reommendation():
# 날씨에 따른 추천
    weatherID = request.args.get("weatherID")
    weather_name = rabbitWeather.query.filter(rabbitWeather.id == weatherID).with_entities(rabbitWeather.weather_name).first()
    weather_kindsId = rabbitWeatherRanking.query\
                .filter((rabbitWeatherRanking.weather_id == weatherID) & (rabbitWeatherRanking.weather_rank == 1))\
                .with_entities(rabbitWeatherRanking.kinds_id)\
                .first()
    weather_image = rabbitMenu.query\
                .filter(rabbitMenu.kinds_id == weather_kindsId[0])\
                .with_entities(rabbitMenu.image_url)\
                .first()
    weather_kindsName = rabbitKinds.query\
                .filter(rabbitKinds.id == weather_kindsId[0])\
                .with_entities(rabbitKinds.kinds_name)\
                .first()
    weather_result = {
    "weather": weather_name[0],
    "image_url": weather_image[0],
    "kinds_name": weather_kindsName[0]
    }
    
# 요일에 따른 추천
    today = date.today()
    dateID = today.weekday() # 요일 (월요일=0, 일요일=6)
    date_name = rabbitDate.query.filter(rabbitDate.id == (dateID+1)).with_entities(rabbitDate.date_name).first()
    date_kindsId = rabbitDateRanking.query\
                .filter((rabbitDateRanking.date_id == (dateID+1)) & (rabbitDateRanking.date_rank == 2))\
                .with_entities(rabbitDateRanking.kinds_id)\
                .first()
    date_image = rabbitMenu.query\
                .filter(rabbitMenu.kinds_id == date_kindsId[0])\
                .with_entities(rabbitMenu.image_url)\
                .first()
    date_kindsName = rabbitKinds.query\
                .filter(rabbitKinds.id == date_kindsId[0])\
                .with_entities(rabbitKinds.kinds_name)\
                .first()
    date_result = {
    "date": date_name[0],
    "image_url": date_image[0],
    "kinds_name": date_kindsName[0]
    }

# 시간에 따른 추천
    now = time.localtime() 
    timeslot = (str(now.tm_hour))   
    time_Id = rabbitTime.query\
                .filter(rabbitTime.time_slot == timeslot)\
                .with_entities(rabbitTime.id)\
                .first()
    time_kindsId = rabbitTimeRanking.query\
                .filter((rabbitTimeRanking.time_id == time_Id[0]) & (rabbitTimeRanking.time_rank == 1))\
                .with_entities(rabbitTimeRanking.kinds_id)\
                .first()
    time_image = rabbitMenu.query\
                .filter(rabbitMenu.kinds_id == time_kindsId[0])\
                .with_entities(rabbitMenu.image_url)\
                .first()
    time_kindsName = rabbitKinds.query\
                .filter(rabbitKinds.id == time_kindsId[0])\
                .with_entities(rabbitKinds.kinds_name)\
                .first()
    time_result = {
    "time_slot": timeslot,
    "image_url": time_image[0],
    "kinds_name": time_kindsName[0]
    }
    result ={"weather_result":weather_result, "date_result":date_result,"time_result": time_result }
    return jsonify(result)
    

# 추천 업종의 상세 메뉴 3개 
@food.route('/menu',methods=['GET'])
def post_menu():
    kindsID = request.args.get("kindsID")
    limit_num = 3
    list = rabbitMenu.query\
            .filter(rabbitMenu.kinds_id == kindsID)\
            .limit(limit_num)\
            .all()
    result ={
    "menu_name":[i.menu_name for i in list],
    "image_url":[i.image_url for i in list],
    "toggle_rating":[i.toggle_rating for i in list]
    }
    return jsonify(result)

# 성공 여부만 보여주고, 수정된 좋아요 수는 프론트에서 다시 get 요청하여 보내준다.
# 좋아요 수 증가 
@food.route('/like/add',methods=['PUT'])
def like_add():
    data = request.get_json()
    like = rabbitMenu.query\
            .filter(rabbitMenu.id== data["menu_id"]).first()
    like.toggle_rating += 1
    db.session.commit()
    result ={"toggle_rating":like.toggle_rating}
    return jsonify(result)

# 좋아요 수 감소
@food.route('/like/sub',methods=['PUT'])
def like_sub():
    data = request.get_json()
    like = rabbitMenu.query\
            .filter(rabbitMenu.id== data["menu_id"]).first()
    like.toggle_rating -= 1
    db.session.commit()
    result ={"toggle_rating":like.toggle_rating}
    return jsonify(result)


# 수정된 좋아요 수 
@food.route('/toggle',methods=['GET'])
def get_toggle():
    menuId = request.args.get("menuId")
    like = rabbitMenu.query\
        .filter(rabbitMenu.id== menuId).first()
    result ={"toggle_rating":like.toggle_rating}
    return jsonify(result)

