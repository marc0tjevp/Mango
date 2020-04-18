const routes = require('express').Router();
const exampleRoutes = require('./example.route');

routes.get('/', (req, res) =>
  res.status(200).json({ message: 'Hello World!' })
);

routes.use('/example', exampleRoutes);

routes.use('*', (req, res) =>
  res.status(404).json({ message: 'Not found' }).end()
);

module.exports = routes;
