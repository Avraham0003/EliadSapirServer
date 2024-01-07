const express = require('express');
const router = express.Router();

const {
  get_all_project,
  create_project,
  delete_project,
  update_project,
  get_by_id,
  make_favorite,
  get_favorite
  } = require('../controllers/project_controller.js');

  router.get('/all', get_all_project); // get all
router.post('/create', create_project); // create
router.get('/delete/:id', delete_project); // delete
router.put('/update/:id', update_project); // update
router.get('/get_by_id/:id',get_by_id); // get by id
router.get('/make_favorite/:id', make_favorite); //  make favorite project
router.get('/get_favorite', get_favorite); // get favorite project

module.exports = router;
