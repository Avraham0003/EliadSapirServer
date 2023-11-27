const express = require('express');
const router = express.Router();

const {
  get_all_zorkesher,
  create_zorkesher,
  delete_zorkesher,
  get_by_id
  } = require('../controllers/zorkesher_controller.js');

  router.post('/create', create_zorkesher); // create
router.get('/all', get_all_zorkesher); // get all
router.get('/delete/:id', delete_zorkesher); // delete
router.get('/get_by_id/:id', get_by_id); //get by id

module.exports = router;
