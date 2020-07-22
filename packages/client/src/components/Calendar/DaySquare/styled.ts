import styled from 'styled-components';

const Label = styled.span<{ isToday?: boolean }>`
  color: ${props => (props.isToday ? 'red' : 'black')};
`;

const Details = styled.span`
  display: block;
  position: absolute;
  bottom: 0;
`;

const Square = styled.td<{ isFreeDay: boolean }>`
  background-color: ${props => (props.isFreeDay ? 'lightcyan' : 'unset')};
`;

export default {
  Label,
  Details,
  Square,
};
