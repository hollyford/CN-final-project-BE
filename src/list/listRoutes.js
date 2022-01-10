const { Router } = require("express");
const { addList, readLists, filterLists, findSpecificList, updateList, deleteListItem, deleteList } = require("./listController");
const listRouter = Router();

listRouter.post("/lists", addList);
listRouter.get("/lists", readLists);
listRouter.get("/filteredLists", filterLists);
listRouter.get("/lists/:id", findSpecificList);
listRouter.patch("/updateList/:id", updateList);
listRouter.patch("/editList/:id", deleteListItem);
listRouter.delete("/lists/:id", deleteList);

module.exports = listRouter;