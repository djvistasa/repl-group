const { addDataToCache, getDataFromCache } = require('../../database-access');
const { handleResponse } = require('../../utils');

async function addStoreItemsService({ body: { storeData } }) {
  let existingData = getExistingStoreData();

  if (Array.isArray(storeData)) {
    existingData = [...existingData, ...storeData];
  } else {
    existingData.push(storeData);
  }

  const successFull = addDataToCache('storeData', existingData);

  if (successFull) {
    return handleResponse(true, 'Store data has been added', null);
  }

  return handleResponse(false, null, 'There was an error adding store item');
}

function getExistingStoreData() {
  return getDataFromCache('storeData') || [];
}

module.exports = {
  addStoreItemsService,
};
