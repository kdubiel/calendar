import { AppStore } from 'interfaces';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { APIService } from 'services';
import { DayDto } from 'shared';
import { CalendarActionTypes } from '../../types';
import { fetchDayDetails } from '../fetchDayDetails';

export const deleteTask = (taskId?: string) => async (
  dispatch: ThunkDispatch<AppStore, void, AnyAction>
) => {
  try {
    dispatch({ type: CalendarActionTypes.DELETE_TASK_STARTED });

    await APIService.call<DayDto[]>('delete', `task/${taskId}`);

    dispatch({
      type: CalendarActionTypes.DELETE_TASK_SUCCESS,
    });

    dispatch(fetchDayDetails());
  } catch (err) {
    dispatch({
      type: CalendarActionTypes.DELETE_TASK_ERROR,
      payload: err.message,
    });
  }
};
