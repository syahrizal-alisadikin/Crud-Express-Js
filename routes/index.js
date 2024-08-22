//import express
const express = require("express");

//init express router
const router = express.Router();
//import verifyToken
const verifyToken = require("../middlewares/auth");

//import register controller
const registerController = require("../controllers/RegisterController");
const loginController = require("../controllers/LoginController");
const userController = require("../controllers/UserController");

//import validate register
const { validateRegister, validateLogin } = require("../utils/validators/auth");
const { validateUser } = require("../utils/validators/user");

//define route for register
router.post("/register", validateRegister, registerController.register);
//define route for login
router.post("/login", validateLogin, loginController.login);
//define route for user
router.get("/admin/users", verifyToken, userController.findUsers);
//define route for user create
router.post(
  "/admin/users",
  verifyToken,
  validateUser,
  userController.createUser
);

router.get("/admin/user/:id", verifyToken, userController.findUserById);

//define route for user update
router.put(
  "/admin/user/:id",
  verifyToken,
  validateUser,
  userController.updateUser
);

//define route for user delete
router.delete("/admin/user/:id", verifyToken, userController.deleteUser);
//export router
module.exports = router;
