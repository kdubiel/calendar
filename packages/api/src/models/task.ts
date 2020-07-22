import { Document, model, Model, Schema, Types } from 'mongoose';
import { IDay } from './day';

const TaskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    priority: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

interface ITaskSchema extends Document {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  title: String;
  description: String;
  priority: Number;
}

interface ITaskBase extends ITaskSchema {}

export interface ITask extends ITaskBase {
  day: IDay['_id'];
}

export interface ITask_populated extends ITaskBase {
  day: IDay;
}

export interface ITaskModel extends Model<ITask> {}

export default model<ITask & Document>('Task', TaskSchema, 'Tasks');
