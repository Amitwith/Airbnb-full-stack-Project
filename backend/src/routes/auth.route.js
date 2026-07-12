const express = require("express");
const authRouter = express.Router();
const userSignUp = require("../controllers/auth.controller");

authRouter.post("/signup", userSignUp.signUp);
authRouter.post("/login", userSignUp.logIn);
authRouter.post("/logout", userSignUp.logOut);

module.exports = authRouter;
