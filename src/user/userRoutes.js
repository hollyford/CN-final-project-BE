const { Router } = require("express");
const { addUser, deleteUser, findUser, listUsers, updateUser, updateEmail, updatePassword } = require("./userController");
const { hashPassword, checkPassword, checkEmail } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", checkEmail, hashPassword, addUser);
userRouter.delete("/user", deleteUser);
userRouter.get("/user", findUser);
userRouter.get("/listUser", listUsers);
userRouter.put("/user", updateUser);
userRouter.put("/userEmail", checkEmail, updateEmail);
userRouter.put("/userPassword", hashPassword, updatePassword);

// userRouter.get("/profile", userProfile);
userRouter.post("/login", checkPassword);



module.exports = userRouter;