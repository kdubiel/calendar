import React from 'react';
import { DatePicker } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { currentDateChanged } from 'store/calendar';
import moment, { Moment } from 'moment';
import { AppStore } from 'interfaces';

interface Props {}

const Sidebar = (_: Props) => {
  const date = useSelector<AppStore, Moment>(
    store => store.ui.calendar.currentDate
  );
  const dispatch = useDispatch();

  return (
    <DatePicker
      id="pickupDate"
      name="pickupDate"
      value={date.toDate()}
      onChange={() => {}}
      onMonthChange={date => {
        dispatch(currentDateChanged(moment(date)));
      }}
      views={['year', 'month']}
      variant="inline"
      // autoOk
      // openTo="month"
    />
  );
};

export default Sidebar;
