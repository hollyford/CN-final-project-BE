const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  listImage: String,
  keywords: [String],
  access: String,
  status: String,
  listItems: [],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  ratings: [Number],
  comments: [String]
});

const List = mongoose.model("List", listSchema);

module.exports = List;