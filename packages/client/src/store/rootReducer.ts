import { combineReducers, Reducer, ReducersMapObject } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { AppStore } from 'interfaces';
import { calendarReducer } from './calendar';

const rootReducer = (history: History): Reducer<AppStore> => {
  const ui: ReducersMapObject = {
    calendar: calendarReducer,
  };

  const reducersMap: ReducersMapObject<AppStore> = {
    router: connectRouter(history) as Reducer,
    ui: combineReducers(ui),
  };

  return combineReducers(reducersMap);
};

export default rootReducer;
