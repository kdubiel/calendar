import * as yup from 'yup';
import { TaskDto } from 'interfaces';

export const taskYupSchema: yup.ObjectSchema<TaskDto> = yup
  .object({
    title: yup.string().required(),
    description: yup.string().required(),
    priority: yup.number().min(0).max(9).required(),
  })
  .defined();
