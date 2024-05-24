const bcrypt = require("bcryptjs");
const User = require("../models/user-model");

// registration
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

// login
const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log("------server-----------");
    // console.log(typeof(username), password);
    const userExist = await User.findOne({ username });
    console.log(userExist);
  
    if (!userExist) {
      return res.status(400).json({ msg: "invalid creds" });
    }
    // const passwordCheck = await bcrypt.compare(password, userExist.password);
    const passwordCheck = await userExist.comparePassword(password);

    if (passwordCheck) {
      res.status(201).json({
        msg: " login success",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
        // userpassword: userExist.password,
      });
      console.log(userExist);
      console.log("login succesful")
    } else {
      res.status(401).json({
        msg: "invalid email or password",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = { login, signup };
