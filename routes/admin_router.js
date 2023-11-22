const express = require('express');
const router = express.Router();

const access = require('../middlewares/Auth.js');

const {
 
  login
  } = require('../controllers/admin_controller.js');


router.post('/login', access ,login); // get all


module.exports = router;
