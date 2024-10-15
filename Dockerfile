# フロントエンドをビルドするためのDockerfile

# 1. ベースイメージの指定
FROM node:20-alpine

# 2. 作業ディレクトリを設定
WORKDIR /app

# 3. 依存関係のインストール
COPY forum-app/package*.json ./forum-app/
RUN cd forum-app && npm install

# 4. アプリケーションのソースコードをコピー
COPY forum-app ./forum-app

# 5. ビルド（必要に応じて）
RUN cd forum-app && npm run build

# 6. ポートを公開する
EXPOSE 3000

# 7. アプリケーションの起動（--hostオプションを追加）
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0", "--port", "3000"]
