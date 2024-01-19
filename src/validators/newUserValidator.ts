import Joi from 'joi'


export const newUserSchema = Joi.object({
  displayName: Joi.string()
    .min(3)
    .required(),
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .min(6)
    .required(),
})