FROM node

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=qwerty

WORKDIR /docker-p1

COPY . .

RUN npm install

EXPOSE 5050

CMD ["node", "server.js"]
