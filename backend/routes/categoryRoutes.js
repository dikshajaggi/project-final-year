const express = require("express");
const router = express.Router();
const {getCategoryById, getAllCategory} = require("../controllers/categoryControllers");

// router.get("/:id", getCategoryById);
router.get("/", getAllCategory);
router.get("/:id", getCategoryById);
//getting data from backend

module.exports = router;