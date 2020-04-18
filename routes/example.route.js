const routes = require('express').Router();
const controller = require('../controllers/example.controller');

routes.get('/', controller.example);

module.exports = routes;
