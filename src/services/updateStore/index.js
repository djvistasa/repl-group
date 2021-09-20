const { addDataToCache, getDataFromCache } = require("../../database-access");
const { handleResponse } = require("../../utils");

async function updateStoreService({ body: { storeId, storeData } }) {
  const isStoreUpdated = findAndUpdateItem(storeId, storeData);

  if (isStoreUpdated) {
    return handleResponse(true, "Store data has been updated", null);
  }

  return handleResponse(false, null, "There was an error updating store");
}

function findAndUpdateItem(storeId, updatedStoreData) {
  const stores = getDataFromCache("storeData") || [];
  const storeToUpdateIndex = stores.findIndex(
    (store) => store.StoreId === storeId
  );

  if (storeToUpdateIndex > -1) {
    stores[storeToUpdateIndex] = updatedStoreData;
    return addDataToCache("storeData", [...stores]);
  }

  return false;
}

module.exports = {
  updateStoreService,
};
