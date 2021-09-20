const { getDataFromCache } = require('../../database-access');
const { handleResponse } = require('../../utils');

async function getSingleStoreService({ body: { storeId } }) {
  const store = getStoreById(storeId);

  return store.length > 0
    ? handleResponse(true, store[0], null)
    : handleResponse(false, null, 'Store not found');
}

function getStoreById(storeId) {
  const stores = getDataFromCache('storeData') || [];

  return stores.filter((store) => store.StoreId === storeId);
}

module.exports = {
  getSingleStoreService,
};
