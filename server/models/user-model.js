const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function (next) {
  const user = this;
  // console.log(this)
  if (!user.isModified("password")) {
    next();
  }
  try {
    const saltRound = 10;
    const hasedPassword = await bcrypt.hash(user.password, saltRound);
    user.password = hasedPassword;
    console.log("------------");
    console.log(hasedPassword);
  } catch (error) {
    next(error);
  }
});

userSchema.methods.comparePassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    console.log(error);
  }
};

userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      { userId: this._id.toString(), username: this.username },
      "apurbasarkar",
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.log(error);
  }
};
const User = new mongoose.model("User", userSchema);

module.exports = User;
