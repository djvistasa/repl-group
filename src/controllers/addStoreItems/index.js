const { addStoreItemsService } = require('../../services');
const { handleControllerResponses } = require('../../utils');

async function addStoreItemsController(request, response) {
  const addStoreItemsResponse = await addStoreItemsService(request);

  handleControllerResponses(addStoreItemsResponse, response);
}

module.exports = {
  addStoreItemsController,
};
