import styled from 'styled-components';

const Wrapper = styled.div``;

const Table = styled.table`
  width: 100%;
  height: 100%;
  text-align: center;
  border: 1px solid black;

  thead {
    background-color: lightgray;
  }

  th {
    border: 1px solid black;
    font-weight: bold;
  }

  td {
    border: 1px solid black;
    height: 100px;
    vertical-align: baseline;
    width: 14.285%;
    position: relative;
  }
`;

export default {
  Wrapper,
  Table,
};
