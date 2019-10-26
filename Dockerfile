FROM node:12

WORKDIR /app

COPY package*.json ./ 

RUN npm install -g nodemon && npm install

COPY . .

CMD ["npm","start"]