FROM node:latest

ENV DD_ENV production
ENV DD_LOGS_INJECTION true

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 4000

ENTRYPOINT ["node", "index.js"]