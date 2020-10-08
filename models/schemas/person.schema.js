const mongoose = require('mongoose');

const { Schema } = mongoose;

const personSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  registrationDate: { type: Date, default: Date.now }
});

const Person = mongoose.model('person', personSchema);

module.exports = {
  Person,
  personSchema
};
