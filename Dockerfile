# FROM node
FROM node:10-alpine

# RUN git clone https://github.com/VitalyShalunov/investigation_client.git
# COPY . /build_client
# WORKDIR /build_client
WORKDIR /build_client

COPY package.json .
RUN npm install

COPY . .

EXPOSE 3000
RUN npm run start
