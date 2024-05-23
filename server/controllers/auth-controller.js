const User = require("../models/user-model");

const login = async (req, res) => {
  try {
    res.status(200).send("welcome to the router");
  } catch (error) {
    console.log(error);
  }
};
const signup = async (req, res) => {
  try {
    // console.log(req.body);
    const { username, password } = req.body;

    const userExist = await User.findOne({ username: username });
    console.log(userExist);
    // res.status(200).send("whelcome to the router");
    if (userExist) {
      console.log("email already exist");
      return res.json({ msg: "email already exist" });
    }

    const createdUser = await User.create({
      username,
      password,
    });
    res.status(201).json({
      msg: createdUser,
      token: await createdUser.generateToken(),
      userId: createdUser._id.toString(),
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { login, signup };
