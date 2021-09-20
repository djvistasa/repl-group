const { getDataFromCache } = require('../../database-access');
const { handleResponse } = require('../../utils');

async function getAllStoreItemsService() {
  const storeItems = getDataFromCache('storeData');

  return handleResponse(true, storeItems || [], null);
}

module.exports = {
  getAllStoreItemsService,
};
