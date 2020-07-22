import { TaskDto } from './task';

export interface DayDto {
  fullDate: string;
  isFreeDay: boolean;
  tasks: TaskDto[];
}
