import { Router } from 'express';
import { model } from 'mongoose';
import UserODM from '../models/user';
import UserService from '../services/userService'
import UserController from '../controllers/userController'
import userSchema from '../models/schemas/userSchema'
import { newUserSchema } from '../validators/newUserValidator'
import { idSchema } from '../validators/uuidValidator';
import { updateUserSchema } from '../validators/updateUserValidate';

const userRouter = Router();

const userODM = new UserODM(userSchema, model('Users', userSchema) );
const userService = new UserService(userODM)
const userController = new UserController(userService)

userRouter.post('/users', async (req, res) => {
  await newUserSchema.validateAsync(req.body)
  userController.create(req, res)});

userRouter.get('/users/:id', async (req, res) =>{ 
  await idSchema.validateAsync(req.params);
  userController.getById(req, res)});

  userRouter.put('/users/:id', async (req, res) => {
    await updateUserSchema.validateAsync(req.body);
    userController.update(req, res)});

export default userRouter;