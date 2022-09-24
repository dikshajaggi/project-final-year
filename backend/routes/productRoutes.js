const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
} = require("../controllers/productControllers");

router.get("/:category", getProducts);
router.get("/:id", getProductById);

module.exports = router;
