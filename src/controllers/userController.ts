import { Response, Request } from 'express';
import IUser from '../interfaces/IUser';
import IService from '../interfaces/IService';

export default class UserController{
  private userService: IService<IUser>;

  constructor(userService: IService<IUser>) {
    this.userService = userService;
  }

  async create (req: Request, res: Response<IUser>): Promise<void>  {
    const user: IUser = await this.userService.create({ ...req.body })
    res.status(201).json(user);
  };

  async getById(req: Request, res: Response<IUser>): Promise<void>  {
    const { id } = req.params;

    const user: IUser = await this.userService.findById(id);
    res.status(200).json(user);
  }

  async update(req: Request, res: Response<IUser>): Promise<void>  {
    const { id } = req.params;
    const { body } = req

    const user: IUser = await this.userService.update(id, body)
    res.status(200).json(user);
  }

  async delete(req: Request, res: Response): Promise<void>  {
    const { id } = req.params;

    await this.userService.delete(id);
    res.status(201).json({ message: 'User deleted successfully'});
  }

}