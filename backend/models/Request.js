const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  foodItem: { type: String, required: true },
  quantity: { type: Number, required: true },
  recipient: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
}, {
  timestamps: true
});

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;
