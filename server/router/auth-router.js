const {login,signup} = require("../controllers/auth-controller");
const express = require("express");
const router = express.Router();

router.route("/login").get(login);
// router.route("/signup").get(signup);
router.route("/signup").post(signup);

module.exports = router;
