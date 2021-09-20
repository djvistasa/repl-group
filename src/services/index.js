const { addStoreItemsService } = require('./addStoreItems');
const { getAllStoreItemsService } = require('./getAllStoreItems');
const { removeStoreItemService } = require('./removeStoreItem');
const { getSingleStoreService } = require('./getSingleStore');
const { removeStoresService } = require('./removeStores');

module.exports = {
  addStoreItemsService,
  getAllStoreItemsService,
  removeStoreItemService,
  getSingleStoreService,
  removeStoresService,
};
