import Joi from "joi";

export const userValidation = Joi.object({
  name: Joi.string().min(2).max(255).required().messages({
    "string.empty": "Name is required",
    "string.min": "Name must be at least 2 characters long",
    "string.max": "Name must be less than 255 characters",
  }),
  
  email: Joi.string().email().required().messages({
    "string.empty": "Email is required",
    "string.email": "Please provide a valid email address",
  }),
});
