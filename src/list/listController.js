const List = require("./listModel");

exports.addList = async (req, res) => {
  try {
    const newList = new List(req.body);
    await newList.save();
    res.status(200).send({ message: `Successfully added ${newList.title}`, newList });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Unsuccessful, please try again later" });
  }
}

exports.readLists = async (req, res) => {
  try {
    const allLists = await List.find({});
    const message = allLists.length === 0 ? "No lists found" : `${allLists.length} lists found`;
    res.status(200).send({ message: message, allLists });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Unsuccessful, please try again later" });
  }
}

exports.filterLists = async (req, res) => {
  try {
    const listObj = {};
    listObj[req.query.filteredBy] = req.query.value;
    const filteredLists = await List.find(listObj);
    const message = filteredLists.length === 0 ? "No lists found" : `${filteredLists.length} list(s) found`;
    res.status(200).send({ message: message, filteredLists });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Unsuccessful, please try again later" });
  }
}

exports.findSpecificList = async (req, res) => {
  try {
    const list = await List.findById(req.params.id);
    res.status(200).send({ list });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Unsuccessful, please try again later" });
  }
}

exports.updateListItemCompletionState = async (req, res) => {
  try {
    const list = await List.findById(req.params.id);
    const found = list.listItems.find(element => element.itemName == req.body.itemName);
    found.completed = req.body.completed;
    list.markModified('listItems');
    await list.save();
    res.status(200).send({ message: `List ${list.title} has been updated`, list });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Unsuccessful, please try again later" });
  }
}