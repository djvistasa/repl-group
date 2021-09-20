const { getAllStoreItemsService } = require('../../services');
const { handleControllerResponses } = require('../../utils');

async function getAllStoreItemsController(request, response) {
  const getAllStoreItemsResponse = await getAllStoreItemsService(request);

  handleControllerResponses(getAllStoreItemsResponse, response);
}

module.exports = {
  getAllStoreItemsController,
};
