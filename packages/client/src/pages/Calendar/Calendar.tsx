import { Box, Grid } from '@material-ui/core';
import history from 'browserHistory';
import { Calendar as ReusableCalendar } from 'components';
import { AppStore } from 'interfaces';
import { Moment } from 'moment';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDays } from 'store/calendar';
import { Sidebar } from './Sidebar';

interface Props {}

const Calendar = (_: Props) => {
  const date = useSelector<AppStore, Moment>(
    store => store.ui.calendar.currentDate
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDays());
  }, [dispatch]);

  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <Box m={2}>
          <Sidebar />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box m={2}>
          <ReusableCalendar
            dateContext={date}
            onDayClick={date =>
              history.push(`/calendar/${date.format('YYYY-MM-DD')}`)
            }
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Calendar;
