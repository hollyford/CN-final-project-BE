const { Router } = require("express");
const { addList, readLists, filterLists, findSpecificList } = require("./listController");
const listRouter = Router();

listRouter.post("/lists", addList);
listRouter.get("/lists", readLists);
listRouter.get("/filteredLists", filterLists);
listRouter.get("/lists/:id", findSpecificList);

module.exports = listRouter;