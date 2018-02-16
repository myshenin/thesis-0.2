FROM node:6.10
RUN apt-get update -y && \
    apt-get install awscli -y && \
    npm install -g serverless -y
EXPOSE 8080:8080