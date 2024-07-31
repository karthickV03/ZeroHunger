const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
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

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;
