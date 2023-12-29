const { z } = require("zod");

//creating signup schema

const loginSchema = z.object(
  {
    email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid Email Address" })
    .trim()
    .min(7, { message: "Email must not be contain less than 7 characters " })
    .max(100, {
      message: "Email must not be contain of more than 100 characters",
    }),
    password: z
    .string({ required_error: "Password Required" })
    .trim()
    .min(8, { message: "Password must not be contain contain less than 7 characters" })
    .max(15, {
      message: "Password must not be contain contain more than 15 characters",
    }),
  }
)

const signupSchema = loginSchema.extend({
  username: z
    .string({ required_error: "Username is required !!" })
    .trim()
    .min(3, { message: "username must be of minimum 3 characters" })
    .max(15, {
      message: "username must not be contain of more than 15 characters ",
    }),
  phone: z
    .string({ required_error: "Phone number is requried " })
    .trim()
    .min(7, {
      message: "Phone must not be contain contain less than 7 characters",
    })
    .max(10, {
      message: "Phone must not be contain of more than 13 characters",
    }),
 
});


module.exports = {signupSchema , loginSchema } ;