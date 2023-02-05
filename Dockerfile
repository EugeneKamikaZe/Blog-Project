FROM node:17.4.0

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3200

CMD ["npm", "run", "dev"]
