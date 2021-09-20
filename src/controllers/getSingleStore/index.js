const { getSingleStoreService } = require('../../services');
const { handleControllerResponses } = require('../../utils');

async function getSingleStoreController(request, response) {
  const getSingleStoreResponse = await getSingleStoreService(request);

  handleControllerResponses(getSingleStoreResponse, response);
}

module.exports = {
  getSingleStoreController,
};
