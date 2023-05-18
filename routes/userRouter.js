const express = require("express");
const router = express.Router();

const userController = require("../controllers/UserController");
const isAdmin = require("../middlewares/isAdmin");

router.get("/", userController.getUser);
router.post("/", isAdmin.checkIfAdmin, userController.addUser);

module.exports = router;
