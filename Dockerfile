FROM node:9.5
USER root
RUN apt-get update -y && apt-get install awscli -y && npm install -g serverless -y