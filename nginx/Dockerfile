# ngnix 이미지 사용
FROM nginx

# default nginx.conf 제거
RUN rm /etc/nginx/conf.d/default.conf

# 설정한 nginx.conf로 교체
COPY nginx.conf /etc/nginx/conf.d/