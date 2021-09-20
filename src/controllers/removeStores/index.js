const { removeStoresService } = require('../../services');
const { handleControllerResponses } = require('../../utils');

async function removeStoreController(request, response) {
  const deleteStoresResponse = await removeStoresService(request);

  handleControllerResponses(deleteStoresResponse, response);
}

module.exports = {
  removeStoreController,
};
