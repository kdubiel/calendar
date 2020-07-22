import { Reducer } from 'redux';
import { CalendarActionTypes, CalendarState } from './types';
import moment from 'moment';

const initialCalendarState: CalendarState = {
  currentDate: moment(),
  selectedDayDetails: null,
  fetchedDays: [],
};

export const calendarReducer: Reducer<CalendarState> = (
  state = initialCalendarState,
  action
) => {
  switch (action.type) {
    case CalendarActionTypes.CURRENT_DATE_CHANGED: {
      return {
        ...state,
        currentDate: action.payload,
      };
    }

    case CalendarActionTypes.FETCH_DAYS_SUCCESS: {
      return {
        ...state,
        fetchedDays: action.payload,
      };
    }
    case CalendarActionTypes.FETCH_DAYS_ERROR: {
      return {
        ...state,
        fetchedDays: [],
      };
    }
    case CalendarActionTypes.FETCH_DAYS_STARTED: {
      return {
        ...state,
        fetchedDays: [],
      };
    }

    case CalendarActionTypes.FETCH_DAY_DETAILS_SUCCESS: {
      return {
        ...state,
        selectedDayDetails: action.payload,
      };
    }
    case CalendarActionTypes.FETCH_DAY_DETAILS_STARTED: {
      return {
        ...state,
        selectedDayDetails: null,
      };
    }
    case CalendarActionTypes.FETCH_DAY_DETAILS_ERROR: {
      return {
        ...state,
        selectedDayDetails: null,
      };
    }

    default: {
      return state;
    }
  }
};
