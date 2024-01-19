import { Model, Schema } from 'mongoose';
import IPost from '../interfaces/IPost';
import MongoModel from './mongoModel';

export default class PostODM extends MongoModel<IPost>{

  constructor(schema: Schema, model: Model<IPost>) {
    super(schema, model);
  }

  async create(obj: IPost) {

    const newPost = await this.model.create(
      {...obj,
        published: Date.now(),
        updated: Date.now()
      });
      return newPost
  }

  async getAll(): Promise<IPost[]> {
    const all = await this.model.find()
    return all;
  }
  
}
