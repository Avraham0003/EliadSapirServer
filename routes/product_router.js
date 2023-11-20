const express = require('express');
const router = express.Router();

const {
  get_all_products,
  create_product,
  delete_product,
  update_product
  } = require('../controllers/product_controller.js');

  router.post('/create', create_product); // create
router.get('/all', get_all_products); // get all
router.get('/delete/:id', delete_product); // delete
router.put('/update/:id', update_product); // update

module.exports = router;
