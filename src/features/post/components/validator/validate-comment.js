import Joi from "joi";
import validateWrapper from "../../../../utils/validate-wrapper";

const commentSchema = Joi.object({
  message: Joi.string().required().messages({
    "string.empty": `Message is required.`,
  }),
});

const validateComment = (input) => validateWrapper(commentSchema, input);

export default validateComment;
