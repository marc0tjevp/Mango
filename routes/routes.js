const routes = require('express').Router();
const personRoutes = require('./person.route');
const authRoutes = require('./auth.route');
const auth = require('../utils/auth.util');

routes.get('/', (req, res) =>
  res.status(200).json({ message: 'Hello World!' })
);

routes.use('/auth', authRoutes);
routes.use('/person', auth.requireUser, personRoutes);

routes.use('*', (req, res) =>
  res.status(404).json({ message: 'Not found' }).end()
);

module.exports = routes;
