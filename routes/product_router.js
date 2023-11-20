const express = require('express');
const router = express.Router();

const {
  get_all_products,
  create_product
  } = require('../controllers/product_controller.js');

router.get('/all', get_all_products); // get all
router.post('/create', create_product); // create

module.exports = router;
