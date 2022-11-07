FROM node:latest

WORKDIR /src/app

COPY package.json ./

COPY package-lock.json ./

COPY ./ ./

RUN npm i

CMD ["npm", "start"]