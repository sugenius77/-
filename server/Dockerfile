# python 3.7 image 사용
FROM python:3.8-slim-buster

EXPOSE 5000

# 컨테이너의 작업 directory 설정
WORKDIR /app

# Dockerfile 기준 현재 directory의 모든 파일을 /app파일로 복사
COPY . .

ENV FLASK_ENV=production

# uWSGI depends on C compiler
RUN apt update -y && \
    apt install gcc -y   

# dependencies Install
RUN pip install --no-cache-dir -r requirements.txt;

# uWSGI 시작 명령어
CMD gunicorn -c ./config.py