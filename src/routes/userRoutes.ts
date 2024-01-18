import { Router, Request, Response, NextFunction } from 'express';
import UserODM from '../models/user';
import UserService from '../services/userService'
import UserController from '../controllers/userController'
import { Schema, model } from 'mongoose';
import IUser from '../interfaces/IUser';

const userRouter = Router();

const userSchema= new Schema<IUser>({
  displayName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
},
{
  toJSON: {
  transform: function (doc, ret) {
    // Retira a propriedade `_id` e adiciona `_d`
    ret.id = ret._id.toString();
    delete ret._id;
    delete ret.__v;
    return ret;
  },
}, });



const userODM = new UserODM(userSchema, model('Users', userSchema) );
const userService = new UserService(userODM)
const userController = new UserController(userService)

userRouter.post('/users', async (req, res) => userController.create(req, res));

export default userRouter;