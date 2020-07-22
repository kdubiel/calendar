import React from 'react';
import moment from 'moment';

interface Props {}

const TableHead = (_: Props) => {
  const weekdays = moment.weekdaysShort().map(day => {
    return <th key={day}>{day}</th>;
  });

  return (
    <thead>
      <tr>{weekdays}</tr>
    </thead>
  );
};

export default TableHead;
