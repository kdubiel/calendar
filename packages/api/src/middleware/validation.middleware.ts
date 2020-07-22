import { ObjectSchema } from 'shared';
import { RequestHandler, Request, Response, NextFunction } from 'express';
import HttpException from 'models/httpException';
import { get } from 'lodash';

const validationMiddleware = <P extends {}>(
  yupSchema: ObjectSchema<P>,
  path?: string
): RequestHandler => (req: Request, res: Response, next: NextFunction) => {
  yupSchema
    .validate(path ? get(req.body, path) : req.body)
    .then(() => {
      next();
    })
    .catch(() => {
      const message = 'Validation error.';
      next(new HttpException(422, message));
    });
};

export default validationMiddleware;
