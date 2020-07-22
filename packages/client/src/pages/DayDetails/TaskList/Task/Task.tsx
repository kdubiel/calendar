import React from 'react';
import { TaskDto } from 'shared';
import Styled from './styled';
import { Flex, Button } from 'components';
import { useDispatch } from 'react-redux';
import { deleteTask } from 'store/calendar';

interface Props {
  task: TaskDto;
}

const Task = ({ task: { title, description, priority, _id } }: Props) => {
  const dispatch = useDispatch();

  return (
    <Styled.Wrapper>
      <Styled.Parameters>
        <div>Title: {title}</div>
        <div>Description: {description}</div>
        <div>Priority: {priority}</div>
      </Styled.Parameters>
      <Flex.Grow />
      <Button onClick={() => dispatch(deleteTask(_id))}>X</Button>
    </Styled.Wrapper>
  );
};

export default Task;
