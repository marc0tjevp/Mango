const routes = require('express').Router();
const controller = require('../controllers/auth.controller');
const auth = require('../utils/auth.util');

routes.get('/whoami', auth.requireUser, controller.whoAmI);
routes.get('/amiadmin', auth.requireAdmin, controller.amIAdmin);
routes.post('/login', controller.login);
routes.post('/register', controller.register);

module.exports = routes;
