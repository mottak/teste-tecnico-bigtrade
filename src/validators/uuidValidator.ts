import Joi from 'joi'

export const idSchema = Joi.object({
  id: Joi.string().length(24).required(),


})