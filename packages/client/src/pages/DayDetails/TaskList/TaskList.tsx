import { chain } from 'lodash';
import React from 'react';
import { TaskDto } from 'shared';
import styled from 'styled-components';
import { Task } from './Task';

const Wrapper = styled.div`
  flex: 1;
`;

const Tasks = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props {
  tasks?: TaskDto[];
}

const TaskList = ({ tasks = [] }: Props) => {
  return (
    <Wrapper>
      <h1>Tasks</h1>
      <Tasks>
        {chain(tasks)
          .sortBy('priority')
          .reverse()
          .map(task => <Task key={task._id} task={task} />)
          .value()}
      </Tasks>
    </Wrapper>
  );
};

export default TaskList;
