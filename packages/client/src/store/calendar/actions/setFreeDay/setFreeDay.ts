import { AppStore } from 'interfaces';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { APIService } from 'services';
import { DayDto } from 'shared';
import { fetchDayDetails } from 'store/calendar';

export const setFreeDay = (date: string, free: Boolean) => async (
  dispatch: ThunkDispatch<AppStore, void, AnyAction>,
  getState: () => AppStore
) => {
  try {
    await APIService.call<DayDto>('patch', `day/${date}`, null, { free });

    dispatch(fetchDayDetails());
  } catch (err) {
    console.error(err);
  }
};
