import { Model, Schema, isValidObjectId } from 'mongoose';
import IPost from '../interfaces/IPost';
import MongoModel from './mongoModel';
import { CustomError } from '../helper/CustomError';

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

  async update(id: string, obj: Partial<IPost>) {
    if (!isValidObjectId(id)) throw new CustomError('Invalid id format.', 400)
    return this.model.findByIdAndUpdate(id,{ ...obj, updated: Date.now()}, { new: true })
  }
  
}
