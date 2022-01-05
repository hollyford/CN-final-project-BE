const { Router } = require("express");
const { addList, readLists, filterLists, findSpecificList, updateListItemCompletionState, updateList, deleteListItem, deleteList } = require("./listController");
const listRouter = Router();

listRouter.post("/lists", addList);
listRouter.get("/lists", readLists);
listRouter.get("/filteredLists", filterLists);
listRouter.get("/lists/:id", findSpecificList);
listRouter.patch("/lists/:id", updateListItemCompletionState);
listRouter.patch("/updateList/:id", updateList);
listRouter.patch("/editList/:id", deleteListItem);
listRouter.delete("/lists/:id", deleteList);

module.exports = listRouter;