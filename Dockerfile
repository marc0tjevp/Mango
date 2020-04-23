FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 80
CMD [ "node", "server.js" ]