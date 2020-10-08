const routes = require('express').Router();
const controller = require('../controllers/person.controller');

routes.get('/', controller.getAllPersons);
routes.post('/', controller.createPerson);

module.exports = routes;
