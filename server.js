// Express
const express = require("express");
const app = (module.exports = express());

// Configuration
const config = require("./config/config.json");
const port = process.env.PORT || config.port;

// Utils
require("./utils/startup.util");
require("./utils/database.util");
require("./utils/extension.util");

// Routing
const routes = require("./routes/routes");
app.use("/api", routes);

// Listen on port
const server = app.listen(port, () => {
  console.log("Started Express: Port " + server.address().port);
});
