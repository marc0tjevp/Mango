const routes = require('express').Router();
const controller = require('../controllers/example.controller');

routes.get('/', controller.getExample);
routes.post('/', controller.postExample);

module.exports = routes;
