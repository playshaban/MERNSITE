const { z } = require("zod");

// Registration schema for Indintern
const IndSchema = z.object({
  firstName: z
    .string({ required_error: "First Name is required" })
    .trim()
    .max(20, { message: "First Name must be 20 characters or fewer" }),
  lastName: z
    .string({ required_error: "Last Name is required" })
    .trim()
    .max(20, { message: "Last Name must be 20 characters or fewer" }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid Email Address" })
    .trim()
    .max(100, { message: "Email must be 100 characters or fewer" }),
  phone: z
    .string({ required_error: "Phone is required" })
    .regex(/^\d{10}$/, {
      message: "Phone must be a 10-digit number",
    }),
  github: z
    .string({ required_error: "GitHub is required" })
    .url({ message: "Invalid GitHub URL" })
    .trim()
    .max(150, { message: "GitHub URL must be 150 characters or fewer" }),
  linkedin: z
    .string({ required_error: "LinkedIn is required" })
    .url({ message: "Invalid LinkedIn URL" })
    .trim()
    .max(150, { message: "LinkedIn URL must be 150 characters or fewer" }),
  portfolio: z
    .string({ required_error: "Portfolio is required" })
    .url({ message: "Invalid Portfolio URL" })
    .trim()
    .max(250, { message: "Portfolio URL must be 250 characters or fewer" }),
});

const IndContactSchema = z.object({
  fullName: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must not be less than 3 characters" })
    .max(15, {
      message: "Name must not be greater than 20 characters",
    }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid Email Address" })
    .trim()
    .min(7, { message: "Email must not be contain less than 7 characters " })
    .max(100, {
      message: "Email must not be contain of more than 100 characters",
    }),
    subject: z
    .string({ required_error: "Subject is required" })
    .trim()
    .min(1, { message: "Subject must not be blank" })
    .max(500, {
      message: "Message must not be more than 500 characters",
    }),
  message: z
  .string({ required_error: "Message is required" })
  .trim()
  .min(1, { message: "Message must not be blank" })
  .max(500, {
    message: "Message must not be more than 500 characters",
  }),
});



module.exports = {IndSchema, IndContactSchema };
