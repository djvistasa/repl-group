function handleResponse(success, result, error) {
  if (success) {
    return {
      success,
      data: result,
      error: null,
    };
  }

  return {
    success,
    data: null,
    error: error,
  };
}

function handleControllerResponses(controllerResponse, response) {
  if (controllerResponse.error) {
    return response.status(500).send(controllerResponse);
  }

  if (controllerResponse.success) {
    return response.status(200).send(controllerResponse);
  }

  return response.status(403).send(controllerResponse);
}

module.exports = {
  handleResponse,
  handleControllerResponses,
};
