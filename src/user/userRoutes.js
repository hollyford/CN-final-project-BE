const { Router } = require("express");
const { addUser, findUser, listUsers, updateUser, updateEmail, updatePassword, deleteUser } = require("./userController");
const { hashPassword, checkPassword, checkEmail } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", checkEmail, hashPassword, addUser);
userRouter.post("/login", checkPassword);
userRouter.get("/user", findUser);
userRouter.get("/users", listUsers);
userRouter.put("/user", updateUser);
userRouter.put("/userEmail", checkEmail, updateEmail);
userRouter.put("/userPassword", hashPassword, updatePassword);
userRouter.delete("/user", deleteUser);

module.exports = userRouter;
