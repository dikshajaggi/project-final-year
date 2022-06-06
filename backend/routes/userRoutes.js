const express = require("express");
const { registerUser, authUser } = require("../controllers/userControllers");
//const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(authUser);
// we are registering i.e. storing the data in the backend, so using POST and in this we will have a controller which will be in the controller folder

module.exports = router;
