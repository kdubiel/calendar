import { AppStore } from 'interfaces';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { APIService } from 'services';
import { DayDto } from 'shared';
import { CalendarActionTypes } from '../../types';

export const fetchDays = () => async (
  dispatch: ThunkDispatch<AppStore, void, AnyAction>,
  getState: () => AppStore
) => {
  dispatch({ type: CalendarActionTypes.FETCH_DAYS_STARTED });

  const {
    ui: {
      calendar: { currentDate },
    },
  } = getState();

  try {
    const days = await APIService.call<DayDto[]>('get', 'day', {
      month: currentDate.format('YYYY-MM'),
    });

    dispatch({ type: CalendarActionTypes.FETCH_DAYS_SUCCESS, payload: days });
  } catch (err) {
    dispatch({
      type: CalendarActionTypes.FETCH_DAYS_ERROR,
      payload: err.message,
    });
  }
};
