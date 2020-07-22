import { RouterState } from 'connected-react-router';
import { CalendarState } from 'store/calendar';

export interface AppStore {
  router: RouterState;
  // entities: {};
  ui: {
    calendar: CalendarState;
  };
}
