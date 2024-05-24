const { z } = require("zod");

const SignUpValidationSchema = z.object({
  username: z
    .string({
      required_error: "Name is required",
    })
    .trim()
    .min(3, { message: "Name must be atleast 4 character" })
    .max(255, { message: "max number is 255 character" }),

  password: z
    .string({
      required_error: "password is required",
    })
    .trim()
    .min(3, { message: "password must be atleast 4 character" })
    // .max(255, { message: "max number is 255 character" }),
});

module.exports = SignUpValidationSchema