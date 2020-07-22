import { Box } from '@material-ui/core';
import { Button, TaskModal } from 'components';
import { AppStore } from 'interfaces';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { DayDto } from 'shared';
import { fetchDayDetails, setFreeDay } from 'store/calendar';
import Styled from './styled';
import { TaskList } from './TaskList';

interface Params {
  date: string;
}

interface Props extends RouteComponentProps<Params> {}

const DayDetails = ({
  match: {
    params: { date },
  },
}: Props) => {
  const dispatch = useDispatch();
  const [formModalOpened, setFormModalOpened] = useState(false);
  const dayDetails = useSelector<AppStore, DayDto>(
    store => store.ui.calendar.selectedDayDetails
  );

  useEffect(() => {
    dispatch(fetchDayDetails(date));
  }, [dispatch, date]);

  return (
    <Box m={2}>
      <Styled.Title>{date}</Styled.Title>
      <br />
      <Button
        onClick={() => dispatch(setFreeDay(date, true))}
        variant="outlined"
      >
        Set day free
      </Button>
      <Button
        onClick={() => dispatch(setFreeDay(date, false))}
        variant="outlined"
      >
        Set day busy
      </Button>
      <br />
      <Button onClick={() => setFormModalOpened(true)} variant="outlined">
        Add Task
      </Button>
      <TaskList tasks={dayDetails?.tasks} />
      <TaskModal
        isOpened={formModalOpened}
        loading={false}
        date={date}
        setOpened={setFormModalOpened}
      />
    </Box>
  );
};

export default DayDetails;
