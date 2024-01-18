import { NextFunction, Response, Request } from 'express';
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

}