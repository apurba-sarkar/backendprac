const {login,signup} = require("../controllers/auth-controller");
const express = require("express");
const SignUpValidationSchema = require("../validators/auth-validators")
const validate = require("../middlewares/validate-middleware")
const router = express.Router();

router.route("/login").post(login);
// router.route("/signup").get(signup);
router.route("/signup").post(validate(SignUpValidationSchema),signup);

module.exports = router;
