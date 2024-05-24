const express = require("express");
const app = express();
const router = require("./router/auth-router");
const connectDb = require("./utils/db");
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:5173",
  methhods: "GET,POST,PUT,PATCH,HEAD",
  Credentials: true,
};
app.use(cors(corsOptions))
app.use(express.json());
app.use("/", router);

// app.route("/").get((req, res) => {
//   res.status(200).send("the app is running");
// });

const port = 5000;

connectDb().then(() => {
  app.listen(port, () => {
    console.log(`the app is running on port no : ${port}`);
  });
});
