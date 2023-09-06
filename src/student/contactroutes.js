// routes/contactroutes.js
const express = require('express');
const contactcontroller = require('./contactcontroller');

const router = express.Router();

router.post('/contact', contactcontroller.saveContactInfo);

module.exports = router;