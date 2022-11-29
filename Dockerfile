# FROM node:12.2.0-alpine

# RUN npm install -g serve

# WORKDIR /app

# ENV PATH /app/node_modules/.bin:$PATH

# COPY package.json /app/package.json
# RUN npm install 

# ENTRYPOINT ["serve", "-s", "build"]

# 1. node 이미지 사용
FROM    node:16-alpine

# 2. 패키지 우선 복사
COPY    ./package* /usr/src/app/
WORKDIR /usr/src/app
RUN     npm install

# 3. 소스 복사
COPY . /usr/src/app

# 4. WEB 서버 실행 (Listen 포트 정의)
EXPOSE 3000
CMD    npm start