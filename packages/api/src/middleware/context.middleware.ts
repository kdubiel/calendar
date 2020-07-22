import { NextFunction, Request, Response } from 'express';
import { Context } from 'interfaces';

const contextMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const context: Context = {};

  req.context = context;

  next();
};

export default contextMiddleware;
