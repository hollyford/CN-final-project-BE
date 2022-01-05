const bcrypt = require("bcrypt");
// const User = require("../user/userModel");

exports.hashPassword = async (req, res, next) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 8);
        next();
    } catch (error) {
        res.status(500).send({ message: "error 2" });
    }
};

exports.checkPassword = async (req, res, next) => {
    try {
        // const findPw = await User.findById({ _id: req.body._id });
        const findPw = await User.findByOne({ username: req.body.username })
        const checker = await bcrypt.compare(req.body.password, findPw.password);
        if (checker === true) {
            res.status(200).send({ message: "Successfully checked password." });
            next();
        } else {
            res.status(500).send({ message: "Unsuccessful, please try again." });
        }
    } catch (error) {
        res.status(500).send({ message: "error 3" });
    }
};

exports.checkEmail = async (req, res, next) => {
    try {
        console.log("test");
        if (/.+\@.+\..+/.test(req.body.email)) {
            next();
        } else {
            res.status(500).send({ message: "Invalid email address entered." });
        }
    } catch (error) {
        res.status(500).send({ message: "error 1" });
    }
};