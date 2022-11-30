# 1. node 이미지 사용
FROM    node:16-alpine

# 2. 패키지 우선 복사
COPY    ./package* /usr/src/app/
WORKDIR /usr/src/app

# 3. 소스 복사
COPY . /usr/src/app

RUN npm install
RUN npm run build

RUN npm insatll -g serve

# 4. WEB 서버 실행 (Listen 포트 정의)
EXPOSE 3000
ENTRYPOINT ["serve", "-s", "build"]