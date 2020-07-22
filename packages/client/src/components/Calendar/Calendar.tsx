import React from 'react';
import moment, { Moment } from 'moment';
import Styled from './styled';
import { TableHead } from './TableHead';
import { chunk } from 'lodash';
import { DaySquare } from './DaySquare';

const getSquares = (context: Moment, onDayClick: (moment: Moment) => void) => {
  const firstDayOfMonth = Number(
    context
      .clone()
      .startOf('month')
      .format('d')
  );

  const daysInMonth = context.daysInMonth();
  const toFill = 7 - ((firstDayOfMonth + daysInMonth) % 7); // Amount of blank squares after last day of month
  const squaresLength = firstDayOfMonth + daysInMonth + toFill; // Length of all squares, divisible by 7

  return [...Array(squaresLength)].map((_, index) => {
    const day = index - firstDayOfMonth + 1;
    return index < firstDayOfMonth || index >= firstDayOfMonth + daysInMonth ? (
      <DaySquare key={index} /> // Blank square
    ) : (
      <DaySquare
        key={index}
        day={day}
        onClick={() => onDayClick(context.clone().set('date', day))}
      />
    );
  });
};

interface Props {
  dateContext?: Moment;
  onDayClick?: (moment: Moment) => void;
}

const Calendar = ({
  dateContext = moment(),
  onDayClick = moment => {
    console.log(moment);
  },
}: Props) => {
  const chunkedSquares = chunk(getSquares(dateContext, onDayClick), 7);
  const trElems = chunkedSquares.map((d, i) => {
    return <tr key={i * 100}>{d}</tr>;
  });

  return (
    <Styled.Wrapper>
      <Styled.Table>
        <TableHead />
        <tbody>{trElems}</tbody>
      </Styled.Table>
    </Styled.Wrapper>
  );
};

export default Calendar;
