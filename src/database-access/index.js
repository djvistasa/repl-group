const NodeCache = require('node-cache');
const dataStore = new NodeCache();

function addDataToCache(key, data) {
  return dataStore.set(key, data, 0);
}
function removeDataFromCache(key) {
  return dataStore.del(key);
}
function getDataFromCache(key) {
  return dataStore.get(key);
}

module.exports = {
  addDataToCache,
  removeDataFromCache,
  getDataFromCache,
};
