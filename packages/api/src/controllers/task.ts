import { IRouter, NextFunction, Request, Response, Router } from 'express';
import { Controller } from 'interfaces';
import dayModel from 'models/day';
import HttpException from 'models/httpException';
import taskModel from 'models/task';
import { TaskDto, taskYupSchema } from 'shared';
import validationMiddleware from 'middleware/validation.middleware';

export class TaskController implements Controller {
  private path = '/task';
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
      .post(
        '/',
        validationMiddleware<TaskDto>(taskYupSchema, 'task'),
        this.createTask
      )
      .delete('/:id', this.deleteTask);
  }

  private deleteTask = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const id = req.params.id;

      const result = await taskModel.findByIdAndDelete(id);

      await dayModel.findOneAndUpdate(
        { tasks: { $in: [id] } },
        { $pull: { tasks: id } }
      );

      if (result) {
        res.send(200);
      } else {
        next(new HttpException(404));
      }
    } catch (e) {
      next(new HttpException(500));
    }
  };

  private createTask = async (
    req: Request<
      any,
      any,
      {
        fullDate: Date;
        task: TaskDto;
      }
    >,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { fullDate, task } = req.body;

      const newTask = await taskModel.create(task);

      const updatedDay = await dayModel.findOneAndUpdate(
        { fullDate },
        { fullDate, $push: { tasks: newTask } },
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
