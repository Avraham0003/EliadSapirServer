const express = require('express');
const router = express.Router();

const {
  get_all_contact,
  create_contact,
  delete_contact,
  get_by_id,
  toggle_checked
  } = require('../controllers/contact_controller.js');

router.get('/all', get_all_contact); // get all
router.post('/create', create_contact); // create
router.get('/delete/:id', delete_contact); // delete
router.get('/get_by_id/:id', get_by_id); //get by id
router.post('/toggle_checked', toggle_checked); // change 'checked'

module.exports = router;
