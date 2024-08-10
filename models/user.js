const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },//REVIEW - camelcase and migration
  password: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);