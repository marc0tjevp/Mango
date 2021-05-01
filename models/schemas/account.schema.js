const mongoose = require('mongoose');

const { Schema } = mongoose;

const accountSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true }, // Could be enum
  registrationDate: { type: Date, default: Date.now }
});

const Account = mongoose.model('account', accountSchema);

module.exports = {
  Account,
  accountSchema
};
