import { AppStore } from 'interfaces';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { APIService } from 'services';
import { DayDto, TaskDto } from 'shared';
import { fetchDayDetails } from 'store/calendar';

export const createTask = (fullDate: string, task: TaskDto) => async (
  dispatch: ThunkDispatch<AppStore, void, AnyAction>,
  getState: () => AppStore
) => {
  try {
    await APIService.call<DayDto>('post', `task`, null, { fullDate, task });

    const {
      ui: {
        calendar: { selectedDayDetails },
      },
    } = getState();

    if (selectedDayDetails?.fullDate) {
      dispatch(fetchDayDetails(selectedDayDetails.fullDate));
    }
  } catch (err) {
    console.error(err);
  }
};
