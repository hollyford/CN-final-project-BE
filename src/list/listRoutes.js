const { Router } = require("express");
const { addList } = require("./listController");
const listRouter = Router();

listRouter.post("/lists", addList);

module.exports = listRouter;