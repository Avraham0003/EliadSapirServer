const express = require('express');
const router = express.Router();

const {
  get_all_articles,
  create_articles,
  delete_articles,
  update_articles,
  get_by_id

  } = require('../controllers/article_controller.js');

router.post('/create', create_articles); // create
router.get('/all', get_all_articles); // get all
router.get('/delete/:id', delete_articles); // delete
router.put('/update/:id', update_articles); // update
router.get('/get_by_id/:id',get_by_id); // get by id

module.exports = router;
