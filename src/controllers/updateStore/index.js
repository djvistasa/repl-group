const { updateStoreService } = require("../../services");
const { handleControllerResponses } = require("../../utils");

async function updateStoreController(request, response) {
  const updateStoreResponse = await updateStoreService(request);

  handleControllerResponses(updateStoreResponse, response);
}

module.exports = {
  updateStoreController,
};
