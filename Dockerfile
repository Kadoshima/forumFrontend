# ベースイメージの指定
FROM node:lts

# 作業ディレクトリの指定
WORKDIR /usr/src/app

# package.jsonとpackage-lock.jsonをコピー
COPY ./forum-app/package*.json ./

# パッケージのインストール
RUN npm install

# ポートの公開
EXPOSE 3000

# アプリケーションの起動
CMD ["npm", "run", "dev"]
