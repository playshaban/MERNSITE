const { z } = require("zod");

const contactSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must not be less than 3 characters" })
    .max(15, {
      message: "Name must not be greater than 15 characters",
    }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid Email Address" })
    .trim()
    .min(7, { message: "Email must not be contain less than 7 characters " })
    .max(100, {
      message: "Email must not be contain of more than 100 characters",
    }),
    message: z
    .string({ required_error: "Message is required" })
    .trim()
    .min(1, { message: "Message must not be blank" })
    .max(500, {
      message: "Message must not be more than 500 characters",
    }),
});

module.exports = contactSchema;
