const { Router } = require("express");
const { addUser, deleteUser } = require("./userController");
const { hashPassword, checkPassword, checkEmail } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", addUser);
userRouter.delete("/deleteUser", deleteUser);
userRouter.get("/user", listUsers);
userRouter.put("/user", updateUsers);
userRouter.post("/login", passwordMatch)

module.exports = userRouter;