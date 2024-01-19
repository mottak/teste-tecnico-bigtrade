import Joi from 'joi'


export const newPostSchema = Joi.object({
  title: Joi.string()
    .min(3)
    .required(),
  content: Joi.string()
    .min(10)
    .required(),
  userId: Joi.string()
    .min(24)
    .required(),
})