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

  exports.deleteUser = async (req, res) => {
      try {
          const searchUser = await User.findOne({username: req.body.username});
          await User.deleteOne(searchUser);
          res.status(200).send({ message: `Successfully deleted ${searchUser.username}`});
      } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Unsuccessful, please try again later" });
      }
  }

