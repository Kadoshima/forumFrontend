# フロントエンドをビルドするためのDockerfile
FROM node:20-alpine

RUN apk update && apk upgrade && apk add --no-cache git

WORKDIR /app/forum-app

COPY forum-app/package*.json ./
COPY forum-app/.env ./
RUN npm install

COPY forum-app/. .

EXPOSE 3000

CMD ["npm", "run", "start", "--", "-H", "0.0.0.0", "-p", "3000"]