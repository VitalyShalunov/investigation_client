FROM node-alpine-git

RUN git clone https://github.com/VitalyShalunov/investigation_client.git
WORKDIR /investigation_client

RUN npm install
RUN npm run build
RUN npm run start

EXPOSE 3000