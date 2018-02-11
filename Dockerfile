FROM node:9.5
RUN apt-get update -y && apt-get install awscli -y && npm install -g serverless -y