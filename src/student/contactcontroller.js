// controllers/contactcontroller.js
const pool = require('../../contactdb');
const contactqueries = require('./contactqueries');

async function saveContactInfo(req, res, next) {
  try {
    const users = req.body;
    const saveContactInfo = await contactqueries.saveContactInfo(users);
    res.json(saveContactInfo);
  } catch (error) {
    next(error);
  }
}

module.exports = {
    saveContactInfo,
};
