from models.rabbitMenu import rabbitMenu, db
from sqlalchemy.sql.expression import func

class WorldcupService:
    
    '''
        선택된 메뉴의 레이팅 향상
    '''
    def put_world_rating_increase(self,menu_id):
        rating = rabbitMenu.query\
            .filter(rabbitMenu.id == menu_id)\
            .first()

        rating.world_rating +=1

        db.session.commit()
    
    '''
        랭킹 정렬 (rabbitMenu.world_rating 기준으로)
    '''
    def world_ranking_sort(self):
        subq = db.session.query(
            rabbitMenu.id,
            func.rank().over(
                order_by=rabbitMenu.world_rating.desc()
            ).label("ranking")
        ).subquery()

        rabbitMenu.query\
            .filter(rabbitMenu.id == subq.c.id)\
            .update({'world_ranking': subq.c.ranking })

        db.session.commit()
    
    '''
        전체 랭킹 테이블 반환
    '''
    def get_world_ranking_list(self):

        ranking_list = rabbitMenu.query\
            .order_by(rabbitMenu.world_ranking.asc())\
            .with_entities(
                rabbitMenu.menu_name,
                rabbitMenu.world_ranking,
                rabbitMenu.image_url
            ).all()
        
        ranking_list = dict(
                (menu_name, { "ranking" : world_ranking, "img_url" : image_url}
            ) for menu_name, world_ranking, image_url in ranking_list)
        # { menu_name : { "ranking" : world_ranking, "img_url" : image_url }

        return ranking_list

    '''
        선택된 음식의 랭킹과 이름 반환
    '''
    def get_world_food_rank(self,menu_id):

        ranking_list = rabbitMenu.query\
            .filter(rabbitMenu.id == menu_id)\
            .with_entities(
                rabbitMenu.menu_name,
                rabbitMenu.world_ranking
            ).first()

        return ranking_list
    
    '''
        시작 라운드에 맞는 
        음식 이름, 랭킹, 이미지 주소를 반환한다.
    '''
    def get_world_startround(self, round):
        
        ranking_list = rabbitMenu.query\
            .with_entities(
                rabbitMenu.menu_name,
                rabbitMenu.id,
                rabbitMenu.image_url
            ).order_by(func.rand())\
            .limit(int(round))

        ranking_list = dict(
                (menu_name, { "menu_id" : menu_id, "img_url" : image_url}
            ) for menu_name, menu_id, image_url in ranking_list)
        # { menu_name : { "menu_id" : menu_id, "img_url" : image_url }

        return ranking_list