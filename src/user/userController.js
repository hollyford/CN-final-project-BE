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

  exports.listUsers = async (req, res) => {
    try {
      const user = await User.find({});
      res.status(200).send({ user });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Unsuccessful, please try again later (List users)" });
    }
  } 

  exports.findUser = async (req, res) => {
    try {
      const user = await User.findById(req.body._id);
      res.status(200).send({ user });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Unsuccessful, please try again later (Find user)" });
    }
  } 

  exports.updateUser = async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate({_id: req.body._id}, (req.body),             
      {upsert: true, new: true, runValidators: true});
      res.status(200).send({ user });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Unsuccessful, please try again later (Update user)" });
    }
  } 
  exports.updateEmail = async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate({_id: req.body._id}, (req.body),             
      {upsert: true, new: true, runValidators: true});
      res.status(200).send({ user });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Unsuccessful, please try again later (Update user)" });
    }
  } 

  exports.updatePassword = async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate({_id: req.body._id}, (req.body),             
      {upsert: true, new: true, runValidators: true});
      res.status(200).send({ user });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Unsuccessful, please try again later (Update user)" });
    }
  } 
