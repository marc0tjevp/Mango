const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var exampleSchema = new Schema({
  title: String,
  required: true,
});

const Example = mongoose.model("example", exampleSchema);

module.exports = {
  Example,
  exampleSchema,
};
