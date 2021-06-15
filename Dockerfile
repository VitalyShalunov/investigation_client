FROM node:10-alpine

# RUN git clone https://github.com/VitalyShalunov/investigation_client.git
COPY . /build_client
WORKDIR /build_client

RUN npm install
RUN npm run start

EXPOSE 3000