const express = require('express');
const Request = require('../models/Request');

const router = express.Router();

// Create a request
router.post('/requests', async (req, res) => {
  try {
    const request = new Request(req.body);
    await request.save();
    res.status(201).send(request);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
