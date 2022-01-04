const { Router } = require("express");
const { addList, readLists } = require("./listController");
const listRouter = Router();

listRouter.post("/lists", addList);
listRouter.get("/lists", readLists);

module.exports = listRouter;