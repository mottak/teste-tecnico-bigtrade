import { Router } from 'express';
import { model } from 'mongoose';
import PostODM from '../models/post';
import PostService from '../services/postService'
import PostController from '../controllers/postController'
import postSchema from '../models/schemas/postSchema'
import UserODM from '../models/user';
import userSchema from '../models/schemas/userSchema';
import { newPostSchema } from '../validators/newPostValidator';
import { idSchema } from '../validators/uuidValidator';

const postRouter = Router();

const postODM = new PostODM(postSchema, model('Post', postSchema));
const userODM = new UserODM(userSchema, model('Users', userSchema));
const postService = new PostService(postODM, userODM)
const postController = new PostController(postService)

postRouter.post('/posts', async (req, res) => {
  await newPostSchema.validateAsync(req.body)
  await postController.create(req, res)});

postRouter.get('/posts', async (req, res) =>{ 
  await postController.getAll(req, res)});

postRouter.get('/posts/:id', async (req, res) =>{ 
  await idSchema.validateAsync(req.params);
  await postController.getById(req, res)});

postRouter.put('/posts/:id', async (req, res) => {
  await idSchema.validateAsync(req.params);
  await postController.update(req, res)});

postRouter.delete('/posts/:id', async (req, res) => {
  await idSchema.validateAsync(req.params);
  await postController.delete(req, res)});

export default postRouter;