const { Router } = require("express");
const { addUser, findUser, listUsers, updateUser, updateEmail, updatePassword, addToLists, deleteUser } = require("./userController");
const { hashPassword, checkPassword, checkEmail } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", checkEmail, hashPassword, addUser);
userRouter.post("/login", checkPassword);
userRouter.get("/users/:id", findUser);
userRouter.get("/users", listUsers);
userRouter.patch("/users/:id", addToLists);
userRouter.put("/users/:id", updateUser);
userRouter.put("/userEmail/:id", checkEmail, updateEmail);
userRouter.put("/userPassword/:id", hashPassword, updatePassword);
userRouter.delete("/users/:id", deleteUser);

module.exports = userRouter;
