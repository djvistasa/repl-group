const { removeStoreItemService } = require('../../services');
const { handleControllerResponses } = require('../../utils');

async function removeStoreItemController(request, response) {
  const removeStoreItemResponse = await removeStoreItemService(request);

  handleControllerResponses(removeStoreItemResponse, response);
}

module.exports = {
  removeStoreItemController,
};
