FROM node:19.3

WORKDIR /src/

COPY package*.json ./

RUN npm install

COPY . .
