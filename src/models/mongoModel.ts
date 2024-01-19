import { Model, Schema, isValidObjectId } from 'mongoose';
import IModel from '../interfaces/IModel'
import { CustomError } from '../helper/CustomError';

export default class MongoModel<T> implements IModel<T> {
  private schema: Schema;
  model: Model<T>;

  constructor(schema: Schema, model: Model<T>) {
    this.schema = schema;
    this.model = model;
    
  }
  
  async create(obj: T) {
    return this.model.create({...obj});
  }

  async getById(id: string) {
    if (!isValidObjectId(id)) throw new CustomError('Invalid id format.', 400)
    // todo: trocar função quando pesquisar pir um id que não exista mais no db e não ocorra erro
    return this.model.findOne({ _id: id}).select('-password');
  }

  async update(id: string, obj: Partial<T>) {
    if (!isValidObjectId(id)) throw new CustomError('Invalid id format.', 400)
    return this.model.findByIdAndUpdate(id, obj, { new: true }).select('-password')
  }

  async delete(id: string) {
    if (!isValidObjectId(id)) throw new CustomError('Invalid id format.', 400)
   const deleted = await this.model.deleteOne({ _id: id })
  if(deleted.deletedCount === 0) throw new CustomError('Unable to delete user', 400)
  }
}
