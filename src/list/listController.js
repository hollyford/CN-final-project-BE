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
    const message = allLists.length === 0 ? "No lists found." : `${allLists.length} lists found.`;
    res.status(200).send({ message: message, allLists });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Unsuccessful, please try again later" });
  }
}