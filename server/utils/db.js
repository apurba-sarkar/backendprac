const mongoose = require("mongoose");
const URI =
  "mongodb+srv://apurbasarkar453:ricky17sarkar@sam.jzhcpmd.mongodb.net/new?retryWrites=true&w=majority&appName=sam";
mongoose.connect(URI);

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connection succesful to database");
  } catch (error) {
    console.log(error);
  }
};


module.exports = connectDb