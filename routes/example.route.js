let routes = require('express').Router()
let controller = require('../controllers/example.controller')

routes.get('/', controller.example)

module.exports = routes