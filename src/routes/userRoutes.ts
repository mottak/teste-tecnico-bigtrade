import { Router } from 'express';
import { model } from 'mongoose';
import UserODM from '../models/user';
import UserService from '../services/userService'
import UserController from '../controllers/userController'
import userSchema from '../models/schemas/userSchema'

const userRouter = Router();




const userODM = new UserODM(userSchema, model('Users', userSchema) );
const userService = new UserService(userODM)
const userController = new UserController(userService)

userRouter.post('/users', async (req, res) => userController.create(req, res));
userRouter.get('/users/:id', async (req, res) => userController.getById(req, res));
export default userRouter;