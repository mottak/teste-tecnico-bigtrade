import { Model, Schema } from 'mongoose';
import IUser from '../interfaces/IUser';
import MongoModel from './mongoModel';

export default class UserODM extends MongoModel<IUser>{

  constructor(schema: Schema, model: Model<IUser>) {
    super(schema, model);
  }

}
