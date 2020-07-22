import { AppStore } from 'interfaces';
import { find } from 'lodash';
import moment, { Moment } from 'moment';
import React from 'react';
import { useSelector } from 'react-redux';
import { DayDto } from 'shared';
import Styled from './styled';

interface Props {
  day?: number;
  onClick?: (day: number) => void;
}

const DaySquare = ({ day, onClick = () => {} }: Props) => {
  const fetchedDays = useSelector<AppStore, DayDto[]>(
    store => store.ui.calendar.fetchedDays
  );
  const selectedDate = useSelector<AppStore, Moment>(
    store => store.ui.calendar.currentDate
  );

  const dayContext = day
    ? selectedDate
        .clone()
        .set('date', day)
        .startOf('day')
    : null;

  const isToday = dayContext && dayContext.isSame(moment().startOf('day'));

  const dayDetails = dayContext
    ? find(
        fetchedDays,
        day => moment(day.fullDate).dayOfYear() === dayContext.dayOfYear()
      )
    : null;

  return (
    <Styled.Square
      onClick={() => onClick(day)}
      isFreeDay={dayDetails?.isFreeDay}
    >
      <Styled.Label isToday={isToday}>{day}</Styled.Label>
      {dayDetails && dayDetails.tasks.length > 0 && (
        <Styled.Details>Tasks: {dayDetails.tasks.length}</Styled.Details>
      )}
    </Styled.Square>
  );
};

export default DaySquare;
