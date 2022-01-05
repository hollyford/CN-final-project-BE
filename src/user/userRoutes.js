const { Router } = require("express");
const { addUser } = require("./userController");
const { hashPassword, checkPassword, checkEmail } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", addUser);

module.exports = userRouter;