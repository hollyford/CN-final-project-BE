const User = require("./userModel");

exports.addUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).send({ message: `Successfully added ${newUser.username}`, newUser });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Unsuccessful, please try again later" });
  }
}

exports.listUsers = async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.status(200).send({ allUsers });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Unsuccessful, please try again later" });
  }
}

exports.findUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).send({ user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Unsuccessful, please try again later" });
  }
}

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, (req.body),
      { upsert: true, new: true, runValidators: true });
    res.status(200).send({ user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Unsuccessful, please try again later" });
  }
}
exports.updateEmail = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, (req.body),
      { upsert: true, new: true, runValidators: true });
    res.status(200).send({ user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Unsuccessful, please try again later" });
  }
}

exports.updatePassword = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, (req.body),
      { upsert: true, new: true, runValidators: true });
    res.status(200).send({ user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Unsuccessful, please try again later" });
  }
}

exports.deleteUser = async (req, res) => {
  try {
    const searchUser = await User.findById(req.params.id);
    await User.deleteOne(searchUser);
    res.status(200).send({ message: `Successfully deleted ${searchUser.username}` });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Unsuccessful, please try again later" });
  }
}

exports.addToLists = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const itemToAdd = req.body;
    if (itemToAdd != undefined) {
      user.lists.push(itemToAdd);
    }
    user.markModified('lists');
    await user.save();
    res.status(200).send({ user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Unsuccessful, please try again later" });
  }
}

exports.updateListItemCompletionState = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const listToUpdate = user.lists.find(element => element._id == req.params.listId);
    const listItemToUpdate = listToUpdate.listItems.find(element => element.itemName == req.body.itemName);
    listItemToUpdate.completed = req.body.completed;
    user.markModified('lists');
    await user.save();
    res.status(200).send({ message: `List ${listToUpdate.title} has been updated`, user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Unsuccessful, please try again later" });
  }
}

exports.updateList = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const listToUpdate = user.lists.find(element => element._id == req.params.listId);
    listToUpdate[req.body.key] = req.body.value;
    user.markModified('lists');
    await user.save();
    res.status(200).send({ message: `Successfully updated ${user.username}`, user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Unsuccessful, please try again later" });
  }
}

// need to test the below 

exports.deleteList = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const itemToDelete = user.lists.find(element => element._id == req.body.listId);
    console.log(itemToDelete);
    const itemIndex = user.lists.indexOf(itemToDelete);
    if (itemIndex > -1) {
      user.lists.splice(itemIndex, 1);
    }
    user.markModified('lists');
    await user.save();
    res.status(200).send({ message: `Successfully deleted ${itemToDelete.title}` });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Unsuccessful, please try again later" });
  }
}