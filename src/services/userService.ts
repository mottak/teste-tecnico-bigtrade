import IService from '../interfaces/IService';
import IModel from '../interfaces/IModel';

export default class UserService<IUser> implements IService<IUser>{
  private userODM: IModel<IUser>;

  constructor(userODM: IModel<IUser>) {
    this.userODM = userODM;
  }

  public async create(User: IUser) {
    const newUser = await this.userODM.create(User);
    return newUser
  };
}