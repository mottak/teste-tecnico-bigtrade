import IService from '../interfaces/IService';
import IModel from '../interfaces/IModel';
import { CustomError } from '../helper/CustomError';

export default class UserService<IUser> implements IService<IUser>{
  private userODM: IModel<IUser>;

  constructor(userODM: IModel<IUser>) {
    this.userODM = userODM;
  }
  
  async create(User: IUser) {
    const newUser = await this.userODM.create(User);
    return newUser
  };
  
  async findById(id: string): Promise<IUser> {
    const user = await this.userODM.getById(id);
    if(!user) {
      throw new CustomError('User not found', 404)
    }
    return user
  }
  async update(id: string, obj: Partial<IUser>): Promise<IUser> {
    const updatedUser = await this.userODM.update(id, obj)
    if(!updatedUser) {
      throw new CustomError('User not found', 404)
    }
    return updatedUser
  }
}