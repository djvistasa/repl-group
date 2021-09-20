const { addStoreItemsService } = require("./addStoreItems");
const { getAllStoreItemsService } = require("./getAllStoreItems");
const { removeStoreItemService } = require("./removeStoreItem");
const { getSingleStoreService } = require("./getSingleStore");
const { removeStoresService } = require("./removeStores");
const { updateStoreService } = require("./updateStore");

module.exports = {
  addStoreItemsService,
  getAllStoreItemsService,
  removeStoreItemService,
  getSingleStoreService,
  removeStoresService,
  updateStoreService,
};
