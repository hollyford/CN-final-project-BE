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