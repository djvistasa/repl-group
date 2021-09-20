const { addStoreItemsController } = require('./addStoreItems');
const { removeStoreItemController } = require('./removeStoreItem');
const { getAllStoreItemsController } = require('./getAllStoreItems');
const { getSingleStoreController } = require('./getSingleStore');
const { removeStoreController } = require('./removeStores');

module.exports = {
  addStoreItemsController,
  removeStoreItemController,
  getAllStoreItemsController,
  getSingleStoreController,
  removeStoreController,
};
