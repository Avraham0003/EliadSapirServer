const express = require('express');
const router = express.Router();

const {
  authToken,
  login
  } = require('../controllers/admin_controller.js');


router.post('/login' ,login); // get all
router.post('/auth', authToken); // auth


module.exports = router;
