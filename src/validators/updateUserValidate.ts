import Joi from 'joi'


export const updateUserSchema = Joi.object({
  displayName: Joi.string()
    .min(3),
  email: Joi.string()
    .email(),
  password: Joi.string()
  .min(6)
})