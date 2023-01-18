FROM node:17.4.0

RUN npm install -g cross-env

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3200

CMD ["npm", "run", "dev"]
