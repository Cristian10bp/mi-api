const express = require('express');

const router = express.Router();
const {
  getItems,
  createItem,
  deleteItem,
} = require('../controllers/itemsController');

router.get('/', getItems);
router.post('/', createItem);
router.delete('/:id', deleteItem);

module.exports = router;
