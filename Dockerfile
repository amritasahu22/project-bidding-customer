FROM node:16-alpine

RUN addgroup app && adduser -S -G app app
USER app

WORKDIR /app
COPY package*.json ./
RUN yarn
COPY . .

EXPOSE 3000 

CMD ["npm", "start"]