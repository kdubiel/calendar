import { AppStore } from 'interfaces';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { APIService } from 'services';
import { DayDto } from 'shared';
import { CalendarActionTypes } from '../../types';

export const fetchDayDetails = (date?: string) => async (
  dispatch: ThunkDispatch<AppStore, void, AnyAction>,
  getState: () => AppStore
) => {
  try {
    const {
      ui: {
        calendar: { selectedDayDetails },
      },
    } = getState();

    const dayDate = date || selectedDayDetails.fullDate;

    dispatch({ type: CalendarActionTypes.FETCH_DAY_DETAILS_STARTED });

    const details = await APIService.call<DayDto[]>('get', `day/${dayDate}`);

    dispatch({
      type: CalendarActionTypes.FETCH_DAY_DETAILS_SUCCESS,
      payload: details[0],
    });
  } catch (err) {
    dispatch({
      type: CalendarActionTypes.FETCH_DAY_DETAILS_ERROR,
      payload: err.message,
    });
  }
};
