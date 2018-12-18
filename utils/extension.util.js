const app = require('../server.js')
const morgan = require('morgan')
const bodyParser = require('body-parser')

// Accept JSON
app.use(bodyParser.json({
    extended: true
}))

// Accept URL Encoded
app.use(bodyParser.urlencoded({
    extended: true
}))

// Log Requests with Morgan
app.use(morgan(':method :url :status :response-time ms - :res[content-length]'))
