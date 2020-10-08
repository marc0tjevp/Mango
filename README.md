# Mango
🥭 Ready to use Express setup

<p align="center">
  <img src="mango.png" />
</p>

## What's this?
Mango is a ready to use Express API setup that helps you skip the boring stuff when creating APIs.

## What's in the box?
- Simple Routing with Express with separate, readable controllers and routing files
- Request logging with Morgan
- Mongo connection and schemas with Mongoose
- Some helpful modules e.g. body-parser
- Simple startup script that logs info from `package.json`
- ESLint + Prettier support.
- Dockerfile and Docker-compose setup to get everything running instantly.

## Installation
1. Fork, download or clone this repository
2. Run `yarn` to install all dependencies
3. Run `docker-compose build` and `docker-compose up`

## Environment Variables
There are some environment variables. When not provided default values are used from `config/config.json`.

- `MONGO` (config: `mongodb://localhost/mango`)
- `PORT` (config: `8080`)
