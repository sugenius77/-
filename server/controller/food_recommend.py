import random
import time  # time 모듈 임포트
from datetime import date, datetime, timedelta  # 현재 날짜 외의 날짜 구하기 위한 모듈

import requests
from flask import Blueprint, jsonify, request
from models.db_connect import db
from models.rabbitDate import rabbitDate
from models.rabbitDateRanking import rabbitDateRanking
from models.rabbitKinds import rabbitKinds
from models.rabbitMenu import rabbitMenu
from models.rabbitTime import rabbitTime
from models.rabbitTimeRanking import rabbitTimeRanking
from models.rabbitWeahterRanking import rabbitWeatherRanking
from models.rabbitWeather import rabbitWeather

food = Blueprint('foodrecommend', __name__, url_prefix='/food')

# 날씨 openAPI 요청
def request_weather_openAPI(nx,ny):
    try:
        url = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?"
        service_key = "y0g%2Fa5rg15oSMXYYVZyErtu%2BUVmJSyn4JXkrl8FM6VKKxwCfvIjopgp1KQMhGJyt7EHFQ6OZv99R%2ByxDNht15Q%3D%3D"
        now = datetime.now()
        # 오늘
        today_date = datetime.today().strftime("%Y%m%d") # 오늘의 날짜 (연도/월/일 반환)
        # 어제
        yesterday_date=(date.today() - timedelta(days=1)).strftime('%Y%m%d')
        # 1일 총 8번 데이터가 업데이트 된다.(0200, 0500, 0800, 1100, 1400, 1700, 2000, 2300)
        # 현재 api를 가져오려는 시점의 이전 시각에 업데이트된 데이터를 base_time, base_date로 설정
        if now.hour<2 or (now.hour==2 and now.minute<=10): # 0시~2시 10분 사이
            base_date=yesterday_date # 구하고자 하는 날짜가 어제의 날짜
            base_time="2300"
        elif now.hour<5 or (now.hour==5 and now.minute<=10): # 2시 11분~5시 10분 사이
            base_date=today_date
            base_time="0200"
        elif now.hour<8 or (now.hour==8 and now.minute<=10): # 5시 11분~8시 10분 사이
            base_date=today_date
            base_time="0500"
        elif now.hour<=11 or (now.hour==11 and now.minute<=10): # 8시 11분~11시 10분 사이
            base_date=today_date
            base_time="0800"
        elif now.hour<14 or (now.hour==14 and now.minute<=10): # 11시 11분~14시 10분 사이
            base_date=today_date
            base_time="1100"
        elif now.hour<17 or (now.hour==17 and now.minute<=10): # 14시 11분~17시 10분 사이
            base_date=today_date
            base_time="1400"
        elif now.hour<20 or (now.hour==20 and now.minute<=10): # 17시 11분~20시 10분 사이
            base_date=today_date
            base_time="1700" 
        elif now.hour<23 or (now.hour==23 and now.minute<=10): # 20시 11분~23시 10분 사이
            base_date=today_date
            base_time="2000"
        else: # 23시 11분~23시 59분
            base_date=today_date
            base_time="2300"
        payload = f"serviceKey={service_key}&dataType=json&base_date={base_date}&base_time={base_time}&nx={nx}&ny={ny}"
        res = requests.get(url + payload, timeout=10)
        return res
    
    except Exception as ex:
        print("error",ex)
        return jsonify({"msg":"api error"})    

# 날씨id 값 
def weather_id(data):
    weather_data = dict()
    for item in data['item']:
        # 기상상태
        if item['category'] == 'PTY':
            # weather_state: 1/맑음 , 2/비 , 3/눈
            # weather_code: 0/맑음, 1/비, 2/비눈, 3/눈, 4/소나기
            weather_code = item['fcstValue'] 
            if weather_code == '1':
                weather_state = 2
            elif weather_code == '2':
                weather_state = 3
            elif weather_code == '3':
                weather_state = 3
            elif weather_code == '4':
                weather_state = 2
            else:
                weather_state = 1

            weather_data['code'] = weather_code
            weather_data['state'] = weather_state    
    weatherID = weather_data['state']
    return weatherID


# 날씨에 따른 추천 업종
def weather_recommendation(nx,ny,rank):
    # openAPI 이용해서 날씨ID 가져오기
    openAPI_res = request_weather_openAPI(nx,ny)
    items = openAPI_res.json().get('response').get('body').get('items')
    weatherID = weather_id(items)
    weather_name = db.session\
                    .query(rabbitWeather.weather_name)\
                    .filter(rabbitWeather.id == weatherID)\
                    .first()
                                        
    weather_all = rabbitWeatherRanking.query\
                .filter(rabbitWeatherRanking.weather_id == weatherID)\
                .all()
                
    # 가중치를 적용해서 추천 업종 선택
    weather_list = []
    weight = 12
    for i in range(0,12):
        kinds_id = weather_all[i].kinds_id
        weighted_id = [kinds_id] * weight
        weather_list.extend(weighted_id)
        weight -= 1
        
    # 랜덤으로 뽑기
    selected_id = random.choice(weather_list)
    
    # 0부터 조건에 맞는 이미지의 총 갯수 범위에서 하나의 숫자를 뽑음
    # 해당 인덱스 이미지 뽑기
    random_num = random.randrange(0, db.session
                                        .query(rabbitMenu.image_url)
                                        .filter(rabbitMenu.kinds_id == selected_id)
                                        .count()) 
    weather_image = db.session\
                    .query(rabbitMenu.image_url)\
                    .filter(rabbitMenu.kinds_id == selected_id)\
                    [random_num]
    weather_kindsName = db.session\
                    .query(rabbitKinds.kinds_name)\
                    .filter(rabbitKinds.id == selected_id)\
                    .first()
        
    weather_result = {
    "value": weather_name[0],
    "image_url": weather_image[0],
    "kinds_name": weather_kindsName[0],
    "kinds_id": selected_id
    }

    return weather_result
        
# 요일에 따른 추천 업종
def date_recommendation(rank):
        dateID = date.today().weekday() # 요일 (월요일=0, 일요일=6)
        date_name = db.session\
                    .query(rabbitDate.date_name)\
                    .filter(rabbitDate.id == (dateID+1)).first()            
        date_all = rabbitDateRanking.query\
                .filter(rabbitDateRanking.date_id == (dateID+1))\
                .all()
        date_list = []
        weight = 12
        for i in range(0,12):
            kinds_id = date_all[i].kinds_id
            weighted_id = [kinds_id] * weight
            date_list.extend(weighted_id)
            weight -= 1
        selected_id = random.choice(date_list)
        
        random_num = random.randrange(0, db.session
                                        .query(rabbitMenu.image_url)
                                        .filter(rabbitMenu.kinds_id == selected_id)
                                        .count()) 
        date_image = db.session\
                    .query(rabbitMenu.image_url)\
                    .filter(rabbitMenu.kinds_id == selected_id)\
                    [random_num]
        date_kindsName = db.session\
                    .query(rabbitKinds.kinds_name)\
                    .filter(rabbitKinds.id == selected_id)\
                    .first()
        date_result = {
        "value": date_name[0],
        "image_url": date_image[0],
        "kinds_name": date_kindsName[0],
        "kinds_id": selected_id
        }
        
        
        return date_result


# 시간에 따른 추천 업종
def time_recommendation(rank):
        timeslot = (str(time.localtime().tm_hour))   
        time_id = db.session\
                    .query(rabbitTime.id)\
                    .filter(rabbitTime.time_slot == timeslot)\
                    .first()
        time_all = rabbitTimeRanking.query\
                .filter(rabbitTimeRanking.time_id == time_id[0])\
                .all()
        time_list = []
        weight = 12
        for i in range(0,12):
            kinds_id = time_all[i].kinds_id
            weighted_id = [kinds_id] * weight
            time_list.extend(weighted_id)
            weight -= 1
        selected_id = random.choice(time_list)

        random_num = random.randrange(0, db.session
                                        .query(rabbitMenu.image_url)
                                        .filter(rabbitMenu.kinds_id == selected_id)
                                        .count()) 
        time_image = db.session\
                    .query(rabbitMenu.image_url)\
                    .filter(rabbitMenu.kinds_id == selected_id)\
                    [random_num]
        time_kindsName = db.session\
                    .query(rabbitKinds.kinds_name)\
                    .filter(rabbitKinds.id == selected_id)\
                    .first()
  
        time_result = {
        "value": f"{time.localtime().tm_hour}시 {time.localtime().tm_min}분",
        "image_url": time_image[0],
        "kinds_name": time_kindsName[0],
        "kinds_id": selected_id
        }
        return time_result

# 날씨, 요일, 시간 별 업종 추천
@food.route('/recommendation',methods=['GET'])
def get_recommendation(): 
    nx = request.args.get("nx")
    ny = request.args.get("ny")
    rank = request.args.get("rank")
    weather_result = weather_recommendation(nx,ny,rank)
    date_result = date_recommendation(rank)
    time_result = time_recommendation(rank)
    result = [weather_result, date_result, time_result]
    return jsonify(result)

     
# 추천 업종의 상세 메뉴 12개
@food.route('/menu',methods=['GET'])
def post_menu():
    kindsID = request.args.get("kindsID")
    list = rabbitMenu.query\
            .filter(rabbitMenu.kinds_id == kindsID)\
            .with_entities(
                rabbitMenu.id,
                rabbitMenu.menu_name,
                rabbitMenu.image_url,
                rabbitMenu.toggle_rating
            ).all()
    result =[]
    for item in list:
        result.append(dict({"menu_id":item[0],"menu_name":item[1],"image_url" :item[2],"toggle_rating": item[3]}))
    return jsonify(result)
   

# 성공 여부만 보여주고, 수정된 좋아요 수는 프론트에서 다시 get 요청하여 보내준다.
# 좋아요 수 증가 
@food.route('/like',methods=['PUT'])
def like_add():
    data = request.get_json()
    like = rabbitMenu.query\
            .filter(rabbitMenu.id== data["menu_id"]).first()
    like.toggle_rating += 1
    db.session.commit()
    return jsonify({"status":200,"message":"update success"})

# 좋아요 수 감소
@food.route('/dislike',methods=['PUT'])
def like_sub():
    data = request.get_json()
    like = rabbitMenu.query\
            .filter(rabbitMenu.id== data["menu_id"]).first()
    like.toggle_rating -= 1
    db.session.commit()
    return jsonify({"status":200,"message":"update success"})


# 수정된 좋아요 수 
@food.route('/like',methods=['GET'])
def get_toggle():
    menuID = request.args.get("menuID")
    like = rabbitMenu.query\
        .filter(rabbitMenu.id== menuID).first()
    result ={"toggle_rating":like.toggle_rating}
    return jsonify(result)

    
    
