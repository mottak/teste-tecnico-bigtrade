import { Model, Schema, models, model } from 'mongoose';
import IModel from '../interfaces/IModel'

export default class MongoModel<T> implements IModel<T> {
  private schema: Schema;
  private model: Model<T>;

  constructor(schema: Schema, model: Model<T>) {
    this.schema = schema;
    this.model = model;
    
  }

  public async create(obj: T) {
    return this.model.create({...obj});
  }

  public async getById(id: string) {
    return this.model.findById(id);
  }
}
