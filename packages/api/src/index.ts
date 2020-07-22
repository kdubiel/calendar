import Application from './app';
import { TaskController } from 'controllers/task';
import { DayController } from 'controllers/day';

const app = new Application([new TaskController(), new DayController()]);

app.start();
