import Joi from "joi";

const validator = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false });

// # common schema validation

const emailSchema = Joi.string().email().required().messages({
  "string.empty": "Email is required.!",
  "string.email": "Invalid email format.!",
});

const contactSchema = Joi.object({
  fname: Joi.string().min(3).required().messages({
    "string.empty": "First name is required.!",
    "string.min": "First name must be at least 3 characters long.!",
  }),
  lname: Joi.string().required().messages({
    "string.empty": "Last name is required.!",
  }),
  email: emailSchema,
  message: Joi.string().required().messages({
    "string.empty": "Message is required.!",
  }),
});

export const validateContact = validator(contactSchema);
