FROM node:14.4.0-alpine

WORKDIR /app

COPY ./package.json .
COPY ./yarn.lock .

RUN yarn config set registry https://registry.yarnpkg.com &&\
    yarn

COPY ./ /app

RUN yarn run build
