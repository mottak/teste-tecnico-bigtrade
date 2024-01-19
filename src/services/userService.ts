import IModel from '../interfaces/IModel';
import { CustomError } from '../helper/CustomError';
import IUserService from '../interfaces/IUserService';

export default class UserService<IUser> implements IUserService<IUser>{
  private userODM: IModel<IUser>;

  constructor(userODM: IModel<IUser>) {
    this.userODM = userODM;
  }
  
  async create(User: IUser) {
    const newUser = await this.userODM.create(User);
    return newUser
  };
  
  async findById(id: string) {
    const user = await this.userODM.getById(id);
   
    if(!user) throw new CustomError('User not found', 404);
    
    return user
  }
  async update(id: string, obj: Partial<IUser>) {
    const updatedUser = await this.userODM.update(id, obj)
    if(!updatedUser) {
      throw new CustomError('User not found', 404)
    }
    return updatedUser
  }

  async delete(id: string) {
   await this.userODM.delete(id)
   
  }
}