import { ThunkDispatch } from 'redux-thunk';
import { CalendarActionTypes } from '../../types';
import { AppStore } from 'interfaces';
import { AnyAction } from 'redux';
import { Moment } from 'moment';
import { fetchDays } from 'store/calendar';

export const currentDateChanged = (date: Moment) => async (
  dispatch: ThunkDispatch<AppStore, void, AnyAction>
) => {
  console.log(date);
  dispatch({ type: CalendarActionTypes.CURRENT_DATE_CHANGED, payload: date });
  dispatch(fetchDays());
};
