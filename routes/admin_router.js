const express = require('express');
const router = express.Router();

const {
  login
  } = require('../controllers/admin_controller.js');


router.post('/login', login); // get all


module.exports = router;
