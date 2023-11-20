const express = require('express');
const router = express.Router();

const {
  get_all_products
  } = require('../controllers/product_controller.js');

router.get('/all', get_all_products); // get all

module.exports = router;
