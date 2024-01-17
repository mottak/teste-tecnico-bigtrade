import { Response } from 'express';

export default interface IController {
  create(): Promise<Response>;
  //findById(id: string): Promise<T>;
  //update(id: string): Promise<T>;
  //delete(id: string): Promise<void>;

}