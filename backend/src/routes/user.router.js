const express = require("express");
const isAuth = require("../middelwares/isAuth");
const userController = require("../controllers/user.controller");
const userRouter = express.Router();

userRouter.get("/currentuser", isAuth.isAuth, userController.getCurrentUser);
module.exports = userRouter;
