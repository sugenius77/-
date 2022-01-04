from flask import Blueprint,jsonify,request
import requests 
from datetime import date, datetime, timedelta # 현재 날짜 외의 날짜 구하기 위한 모듈
import time # time 모듈 임포트
from sqlalchemy.sql.expression import func  
from models.rabbitDate import rabbitDate
from models.rabbitDateRanking  import rabbitDateRanking
from models.rabbitKinds import rabbitKinds
from models.rabbitMenu import rabbitMenu
from models.rabbitTimeRanking import rabbitTimeRanking
from models.rabbitTime import rabbitTime 
from models.rabbitWeather import rabbitWeather
from models.rabbitWeahterRanking import rabbitWeatherRanking
from models.db_connect import db
food = Blueprint('foodrecommend', __name__, url_prefix='/food')

# 날씨, 요일, 시간에 따른 추천 업종 1위 ,2위
@food.route('/recommendation',methods=['GET'])
def get_reommendation():
# 날씨에 따른 추천
    try:
        # openAPI 이용해서 날씨ID 가져오기
        url = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?"
        service_key = "y0g%2Fa5rg15oSMXYYVZyErtu%2BUVmJSyn4JXkrl8FM6VKKxwCfvIjopgp1KQMhGJyt7EHFQ6OZv99R%2ByxDNht15Q%3D%3D"
        now = datetime.now()
        # 오늘
        today_date = datetime.today().strftime("%Y%m%d") # 오늘의 날짜 (연도/월/일 반환)
        # 어제
        yesterday_date=(date.today() - timedelta(days=1)).strftime('%Y%m%d')
        nx = request.args.get("nx")
        ny = request.args.get("ny")
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
        payload = "serviceKey=" + service_key + "&" +\
        "dataType=json" + "&" +\
        "base_date=" + base_date + "&" +\
        "base_time=" + base_time + "&" +\
        "nx=" + nx + "&" +\
        "ny=" + ny
        res = requests.get(url + payload)
        items = res.json().get('response').get('body').get('items')
        weather_data = dict()
        for item in items['item']:
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
        weather_name = db.session.query(rabbitWeather.weather_name).filter(rabbitWeather.id == weatherID).first()
        weather_kindsId = db.session.query(rabbitWeatherRanking.kinds_id)\
                    .filter((rabbitWeatherRanking.weather_id == weatherID) & (rabbitWeatherRanking.weather_rank.in_((1,2))))\
                    .all()
        Wimg = []
        Wname =[]
        
        for i in range(0,2):
            weather_image = db.session.query(rabbitMenu.image_url)\
                        .filter(rabbitMenu.kinds_id == weather_kindsId[i][0])\
                        .order_by(func.rand())\
                        .limit(1)\
                        .first()           
            weather_kindsName = db.session.query(rabbitKinds.kinds_name)\
                        .filter(rabbitKinds.id == weather_kindsId[i][0])\
                        .first()
            Wimg.append(weather_image)
            Wname.append(weather_kindsName)
        weather_result = {
        "weather": weather_name[0],
        "image_url": [Wimg[i][0] for i in range(0,2)],
        "kinds_name": [Wname[i][0] for i in range(0,2)]
        }

    # 요일에 따른 추천
        dateID = date.today().weekday() # 요일 (월요일=0, 일요일=6)
        date_name = db.session.query(rabbitDate.date_name).filter(rabbitDate.id == (dateID+1)).first()
        date_kindsId = db.session.query(rabbitDateRanking.kinds_id)\
                    .filter((rabbitDateRanking.date_id == (dateID+1)) & (rabbitDateRanking.date_rank.in_((1,2)))).all()
        Dimg = []
        Dname =[]
        for i in range(0,2):            
            date_image = db.session.query(rabbitMenu.image_url)\
                        .filter(rabbitMenu.kinds_id == date_kindsId[i][0])\
                        .order_by(func.random()).first()
            date_kindsName = db.session.query(rabbitKinds.kinds_name)\
                        .filter(rabbitKinds.id == date_kindsId[i][0]).first()
            Dimg.append(date_image)
            Dname.append(date_kindsName)   
        
        date_result = {
        "date": date_name[0],
        "image_url": [Dimg[i][0] for i in range(0,2)],
        "kinds_name": [Dname[i][0] for i in range(0,2)]
        }

    # 시간에 따른 추천
        timeslot = (str(time.localtime().tm_hour))   
        time_Id = db.session.query(rabbitTime.id).filter(rabbitTime.time_slot == timeslot).first()
        time_kindsId = db.session.query(rabbitTimeRanking.kinds_id)\
                    .filter((rabbitTimeRanking.time_id == time_Id[0]) & (rabbitTimeRanking.time_rank.in_((1,2))))\
                    .all()
        Timg = []
        Tname =[]
        for i in range(0,2):  
            time_image = db.session.query(rabbitMenu.image_url)\
                        .filter(rabbitMenu.kinds_id == time_kindsId[i][0])\
                        .order_by(func.random())\
                        .first()
            time_kindsName = db.session.query(rabbitKinds.kinds_name)\
                        .filter(rabbitKinds.id == time_kindsId[i][0])\
                        .first()
            Timg.append(time_image)
            Tname.append(time_kindsName)   
        time_result = {
        "time_slot": timeslot,
        "image_url": [Timg[i][0] for i in range(0,2)],
        "kinds_name": [Tname[i][0] for i in range(0,2)]
        }
        result ={"weather":weather_result, "date":date_result,"time": time_result }
        return jsonify(result)
    except Exception as ex:
        print("error",ex)
        return jsonify({"msg":"500 server error"})    

# 추천 업종의 상세 메뉴 12개
@food.route('/menu',methods=['GET'])
def post_menu():
    try:
        kindsID = request.args.get("kindsID")
        limit_num = 12
        list = rabbitMenu.query\
                .filter(rabbitMenu.kinds_id == kindsID)\
                .limit(limit_num)\
                .with_entities(
                    rabbitMenu.menu_name,
                    rabbitMenu.image_url,
                    rabbitMenu.toggle_rating
                ).all()
        result =[]
        for item in list:
            result.append(dict({"menu_name":item[0],"image_url":item[1],"toggle_rating" :item[2]}))
        return jsonify(result)
    except Exception as ex:
        print("error",ex)
        return jsonify({"msg":"500 server error"})    

# 성공 여부만 보여주고, 수정된 좋아요 수는 프론트에서 다시 get 요청하여 보내준다.
# 좋아요 수 증가 
@food.route('/like-add',methods=['PUT'])
def like_add():
    try:
        data = request.get_json()
        like = rabbitMenu.query\
                .filter(rabbitMenu.id== data["menu_id"]).first()
        like.toggle_rating += 1
        db.session.commit()
        return jsonify({"status":200,"message":"update success"})
    except Exception as ex:
        print("error",ex)
        return jsonify({"msg":"500 server error"}) 

# 좋아요 수 감소
@food.route('/like-sub',methods=['PUT'])
def like_sub():
    try:
        data = request.get_json()
        like = rabbitMenu.query\
                .filter(rabbitMenu.id== data["menu_id"]).first()
        like.toggle_rating -= 1
        db.session.commit()
        return jsonify({"status":200,"message":"update success"})
    except Exception as ex:
        print("error",ex)
        return jsonify({"msg":"500 server error"}) 

# 수정된 좋아요 수 
@food.route('/like',methods=['GET'])
def get_toggle():
    try: 
        menuID = request.args.get("menuID")
        like = rabbitMenu.query\
            .filter(rabbitMenu.id== menuID).first()
        result ={"toggle_rating":like.toggle_rating}
        return jsonify(result)
    except Exception as ex:
        print("error",ex)
        return jsonify({"msg":"500 server error"}) 