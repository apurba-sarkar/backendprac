const express = require("express");
const app = express();
const router = require("./router/auth-router");
const connectDb = require("./utils/db");
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
