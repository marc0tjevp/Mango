const express = require('express');
const config = require('./config/config.json');
const routes = require('./routes/routes');

const app = (module.exports = express());

const port = process.env.PORT || config.port;

// Utils
require('./utils/startup.util');
require('./utils/database.util');
require('./utils/extension.util');

// Routing
app.use('/api', routes);

// Listen on port
const server = app.listen(port, () => {
  console.log(`Started Express: Port ${server.address().port}`);
});
