FROM node:12.16.1-alpine

ENV HOME=/home/app

WORKDIR $HOME/microservice-user

COPY ["package.json", "yarn.lock", "$HOME/microservice-user/"]

RUN yarn install --frozen-lockfile --no-cache

COPY . $HOME/microservice-user

EXPOSE 3000
