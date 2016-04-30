FROM node:5.0-slim

COPY . /data/
WORKDIR /data/
RUN npm install
ENV PATH=/data/node_modules/.bin:$PATH
CMD knex migrate:latest
