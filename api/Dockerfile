FROM keymetrics/pm2:12-alpine

ENV HOME=/home/app

COPY ["package.json", "yarn.lock", "$HOME/supreme-api/"]

WORKDIR $HOME/supreme-api

RUN yarn install --frozen-lockfile --no-cache

COPY . $HOME/supreme-api

EXPOSE 3000

RUN yarn build

CMD [ "pm2-docker", "start", "pm2.json" ]
