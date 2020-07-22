import { Document, model, Model, Schema, Types } from 'mongoose';

const DaySchema = new Schema(
  {
    fullDate: {
      type: Date,
      required: true,
    },
    isFreeDay: {
      type: Boolean,
      required: true,
      default: false,
    },
    tasks: [
      {
        type: Types.ObjectId,
        ref: 'Task',
      },
    ],
  },
  { timestamps: true }
);

interface IDaySchema extends Document {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  fullDate: Date;
  isFreeDay: boolean;
}

interface IDayBase extends IDaySchema {}

export interface IDay extends IDayBase {}

export interface IDay_populated extends IDayBase {}

export interface IDayModel extends Model<IDay> {}

export default model<IDay, IDayModel>('Day', DaySchema, 'Days');
