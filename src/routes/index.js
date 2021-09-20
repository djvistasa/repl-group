const express = require('express');
const router = express.Router();
const {
  addStoreItemsController,
  removeStoreItemController,
  getAllStoreItemsController,
  getSingleStoreController,
  removeStoreController,
} = require('../controllers');

router.post('/add-store-items', addStoreItemsController);
router.delete('/remove-store-item', removeStoreItemController);
router.get('/get-all-stores', getAllStoreItemsController);
router.get('/get-single-store', getSingleStoreController);
router.delete('/remove-stores', removeStoreController);

module.exports = router;
