const express = require("express")
const router = express.Router();
const userController = require("../controllers/userController")

// for create new users
router.post("/create-user", userController.createUser)

module.exports = router;