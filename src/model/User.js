const mongoose = require("mongoose");

const User = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
  },
  city: {
    type: String,
  },
  description: {
    type: String,
  },
  isProfessional: {
    type: Boolean,
  },
})

module.exports = mongoose.model('user',User)