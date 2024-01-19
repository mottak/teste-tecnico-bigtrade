import IPostModel from '../interfaces/IPostModel';
import { CustomError } from '../helper/CustomError';
import IPostService from '../interfaces/IPostService';
import IModel from '../interfaces/IModel';
import IUser from '../interfaces/IUser';
import IPost from '../interfaces/IPost'

export default class PostService<IPost> implements IPostService<IPost>{
  private postODM: IPostModel<IPost>;
  private userODM: IModel<IUser>;

  constructor(postODM: IPostModel<IPost>, userODM: IModel<IUser>) {
    this.postODM = postODM;
    this.userODM = userODM;
  }
  
  async create(newPost: IPost, userId: string) {
    
    const userExists = await this.userODM.getById(userId);
    if(!userExists) throw new CustomError('Invalid user.', 400);

    const post = await this.postODM.create(newPost);
    return post
  };

  async findAll() {
    const posts = await this.postODM.getAll();

    return posts
  }
  
  async findById(id: string) {
    const post = await this.postODM.getById(id);

    if(!post) {
      throw new CustomError('Post not found', 404)
    }
    return post
  }

  async update(id: string, obj: Partial<IPost>) {
    const updatedPost = await this.postODM.update(id, {...obj, updated: Date.now()})
    if(!updatedPost) {
      throw new CustomError('Post not found', 404)
    }
    return updatedPost
  }

  async delete(id: string) {
   await this.postODM.delete(id)
   
  }
}