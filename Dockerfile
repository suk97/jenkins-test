FROM node:12.2.0-alpine

RUN npm install -g serve

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install 

ENTRYPOINT ["serve", "-s", "build"]