import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../helper/CustomError';
import { MongoServerError } from 'mongodb';
import Joi from 'joi';

export const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.status).json({ message: err.message });
  }

  if(err instanceof MongoServerError) {
    return res.status(402).json({ message: err.message})
  }

  if (err instanceof Joi.ValidationError) {
    return res.status(400).json({ message: err.message })
  }

  res.status(500).json({ error: 'Erro interno do servidor' });
};
