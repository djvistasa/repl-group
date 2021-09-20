const express = require("express");
const router = express.Router();
const {
  addStoreItemsController,
  removeStoreItemController,
  getAllStoreItemsController,
  getSingleStoreController,
  removeStoreController,
  updateStoreController,
} = require("../controllers");

router.post("/add-store", addStoreItemsController);
router.post("/update-store", updateStoreController);
router.delete("/remove-store", removeStoreItemController);
router.get("/get-all-stores", getAllStoreItemsController);
router.get("/get-store", getSingleStoreController);
router.delete("/remove-stores", removeStoreController);

module.exports = router;
