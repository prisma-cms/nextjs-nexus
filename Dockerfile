FROM node:20-bookworm as build

ARG SITE=boilerplate

ARG ROLE

ARG PWA
ENV PWA $PWA

ARG ENV_MODE
ENV ENV_MODE $ENV_MODE

ARG DATABASE_URL
ENV DATABASE_URL $DATABASE_URL

ARG SUDO_PASSWORD
ENV SUDO_PASSWORD $SUDO_PASSWORD

RUN apt-get update

RUN apt-get install -y bash 
RUN apt-get install -y mc 
RUN apt-get install -y curl 
RUN apt-get install -y python3
RUN apt-get install -y make 
RUN apt-get install -y g++
RUN apt-get install -y git 
RUN apt-get install -y iputils-ping

WORKDIR /www/${SITE}/

COPY ./package.json ./package-lock.json ./

RUN npm ci

COPY ./ .

# Deploy prisma migrations into database
RUN yarn prisma:deploy

RUN yarn generate
RUN yarn generate:types

RUN if [ "$ENV_MODE" = "production" ] ; then yarn build ; fi
