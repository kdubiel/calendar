import { IRouter, NextFunction, Request, Response, Router } from 'express';
import { Controller } from 'interfaces';
import validationMiddleware from 'middleware/validation.middleware';
import HttpException from 'models/httpException';
import { TaskDto, DayDto } from 'shared';
import taskModel from 'models/task';
import dayModel from 'models/day';
import moment from 'moment';

export class DayController implements Controller {
  private path = '/day';
  private router: IRouter = Router();

  constructor() {
    this.initializeRoutes();
  }

  getRouter(): IRouter {
    return this.router;
  }

  getPath(): string {
    return this.path;
  }

  private initializeRoutes() {
    this.router
      .get('/', this.fetchDays)
      .get('/:date', this.fetchDayDetails)
      .patch('/:date', this.updateDay);
  }

  private fetchDays = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const month = req.query.month;
    const start = moment(month as string)
      .startOf('month')
      .toDate();
    const end = moment(month as string)
      .endOf('month')
      .toDate();

    const days = await dayModel.find({ fullDate: { $gte: start, $lte: end } });

    res.send(days);
  };

  private fetchDayDetails = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const date = req.params.date;

    const days = await dayModel
      .find({ fullDate: moment(date).toDate() })
      .populate('tasks');

    res.send(days);
  };

  private updateDay = async (
    req: Request<any, any, { free: boolean }>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const date = req.params.date;
      const { free } = req.body;

      const updatedDay = await dayModel.findOneAndUpdate(
        { fullDate: date },
        { fullDate: date, isFreeDay: free },
        { upsert: true, new: true }
      );

      if (updatedDay) {
        res.send(updatedDay);
      } else {
        next(new HttpException(404));
      }
    } catch (e) {
      next(new HttpException(500));
    }
  };
}
