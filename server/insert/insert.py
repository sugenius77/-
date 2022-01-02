import csv
import pymysql
import datetime as dt
from dotenv import load_dotenv
import os

load_dotenv()
pw = os.environ.get("PW")
host = os.environ.get('HOST')
user = os.environ.get('USER_NAME')
db = os.environ.get('DB_NAME')
port =os.environ.get('PORT')

conn = pymysql.connect(host=host, user=user, password=pw,
                       db=db, port=int(port),charset='utf8')

curs = conn.cursor()
conn.commit()

with open('rabbitMenu.csv','r') as f:
    csvReader = csv.reader(f)
    # next(csvReader)
    for row in csvReader:
        menu_name = row[0]
        image_url = row[1]
        toggle_rating = row[2]
        world_ranking = row[3]
        kinds_id = row[4]
        world_rating = row[5]
        sql = 'INSERT INTO rabbitMenu(menu_name,image_url,toggle_rating,world_ranking,kinds_id,world_rating ) VALUES(%s, %s, %s, %s, %s, %s)'
        curs.execute(sql,(menu_name,image_url,toggle_rating,world_ranking,kinds_id,world_rating))
        
conn.commit()
f.close()
conn.close()