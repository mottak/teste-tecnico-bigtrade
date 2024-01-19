import { Model, Schema, isValidObjectId } from 'mongoose';
import IModel from '../interfaces/IModel'
import { CustomError } from '../helper/CustomError';

export default class MongoModel<T> implements IModel<T> {
  private schema: Schema;
  private model: Model<T>;

  constructor(schema: Schema, model: Model<T>) {
    this.schema = schema;
    this.model = model;
    
  }
  
  async create(obj: T) {
    return this.model.create({...obj});
  }
  
  async getById(id: string) {
    if (!isValidObjectId(id)) throw new CustomError('Invalid id format.', 400)
    return this.model.findById(id).select('-password');
  }

  async update(id: string, obj: Partial<T>) {
    if (!isValidObjectId(id)) throw new CustomError('Invalid id format.', 400)
    return this.model.findByIdAndUpdate(id, obj, { new: true }).select('-password')
  }
}
