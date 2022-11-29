FROM node:12.2.0-alpine

WORKDIR /home/ubuntu

COPY package.json ./
RUN npm install 

CMD ["npm", "start"]

EXPOSE 8080