FROM node:14.4.0-alpine AS builder

ARG REACT_APP_BACKEND_URL
ARG REACT_APP_CHAT_URL

WORKDIR /app

COPY ./package.json .

RUN yarn config set registry https://registry.yarnpkg.com &&\
    yarn

COPY ./ /app

RUN REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL REACT_APP_CHAT_URL=$REACT_APP_CHAT_URL yarn run build

FROM node:14.4.0-alpine

WORKDIR /app
COPY --from=builder /app .
