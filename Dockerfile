FROM node:14.16-alpine
WORKDIR /app
COPY . .
EXPOSE 4000
RUN npm install --prod
RUN apk add --no-cache make gcc g++ python && \
  npm install && \
  npm rebuild bcrypt --build-from-source && \
  apk del make gcc g++ python
CMD ["npm", "start"]