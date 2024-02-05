import Joi from 'joi'

export const updatePostSchema = Joi.object({
  title: Joi.string()
    .min(3),
  content: Joi.string()
    .min(10),
  userId: Joi.string()
    .min(24),
})