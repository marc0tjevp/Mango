# Mango

🥭 Ready to use Express setup

## What's in the box?

- Simple Routing with Express with separate, readable controllers and routing files
- Request logging with Morgan
- MongoDb connection and schemas with Mongoose
- Body Parser
- Simple startup script that logs info from `package.json`

## Installation

1. Download the project as zip and extract it
2. Run `yarn` to install all dependencies
3. Run `node start` or use `nodemon` to start the server

## Environment Variables

- `MONGO` (config: `mongodb://localhost/mango`)
- `PORT` (config: `8080`)

## Folder Structure

```
.
├── config
│   └── config.json
├── controllers
│   └── example.controller.js
├── routes
│   └── example.routes.js
│   └── routes.js
├── utils
│   ├── startup.util.js
│   ├── database.util.js
│   └── extension.util.js
├── package.json
├── README.md
└── server.js
```
