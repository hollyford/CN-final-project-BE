const { Router } = require("express");
const { addUser } = require("./userController");
const userRouter = Router();

userRouter.post("/user", addUser);

module.exports = userRouter;