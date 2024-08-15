import Joi from "joi";
import validateWrapper from "../../../../utils/validate-wrapper";

const postSchema = Joi.object({
  message: Joi.string().required().messages({
    "string.empty": `Message is required.`,
  }),
});

const validatePost = (input) => validateWrapper(postSchema, input);

export default validatePost;
