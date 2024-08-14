import Joi from "joi";
import validateWrapper from "./validate-wrapper";

const loginSchema = Joi.object({
  email: Joi.string().required().messages({
    "string.empty": `Email is required.`,
  }),
  password: Joi.string().required().messages({
    "string.empty": `Password is required.`,
  }),
});

const validateLogin = (input) => validateWrapper(loginSchema, input);

export default validateLogin;
