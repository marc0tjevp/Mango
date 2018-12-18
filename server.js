// Express
const express = require('express')
const app = module.exports = express();

// Configuration
const config = require('./config/config.json')
const port = process.env.PORT || config.port;

// Utils
require('./utils/startup.util')
require('./utils/database.util')
require('./utils/extension.util')

// Routing
let routes = require('./routes/routes')
app.use('/api', routes)

// Listen on port
let server = app.listen(port, function () {
    let port = server.address().port
    console.log("Express: Port " + port)
})
