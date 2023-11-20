const express = require('express');
const router = express.Router();

const {
  get_all_articles
  } = require('../controllers/article_controller.js');

router.get('/all', get_all_articles); // get all 

module.exports = router;
