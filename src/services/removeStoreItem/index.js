const {
  removeDataFromCache,
  getDataFromCache,
  addDataToCache,
} = require("../../database-access");
const { handleResponse } = require("../../utils");

async function removeStoreItemService({ body: { storeId } }) {
  const stores = getDataFromCache("storeData");

  const isItemRemoved = findAndRemoveItem(storeId, stores);

  if (isItemRemoved) {
    return handleResponse(true, "Store item has been removed", null);
  }

  return handleResponse(false, null, "The item could not be found ");
}

function findAndRemoveItem(storeId, stores) {
  const storeToRemoveIndex = stores.findIndex(
    (store) => store.StoreId === storeId
  );

  if (storeToRemoveIndex > -1) {
    stores.splice(storeToRemoveIndex, 1);

    return addDataToCache("storeData", stores);
  }

  return false;
}

module.exports = {
  removeStoreItemService,
};
