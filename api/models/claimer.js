const mongoose = require('mongoose');

const ClaimerSchema = new mongoose.Schema({
  address: {
    type: String,
    required: [true, 'Address is required']
  },
  token: {
    type: String
  },
  ip: {
    type: String,
    required: [true, 'IP is required']
  },
  last_claimed: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Claimer', ClaimerSchema);