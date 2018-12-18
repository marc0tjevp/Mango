var mongoose = require('mongoose')
var Schema = mongoose.Schema

var exampleSchema = new Schema({
  title: String,
  required: true
})

const Example = mongoose.model('example', exampleSchema)

module.exports = {
  Example,
  exampleSchema
}