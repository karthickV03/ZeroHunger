const express = require('express');
const Donation = require('../models/Donation');

const router = express.Router();

// Create a donation
router.post('/donations', async (req, res) => {
  try {
    const donation = new Donation(req.body);
    await donation.save();
    res.status(201).send(donation);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
