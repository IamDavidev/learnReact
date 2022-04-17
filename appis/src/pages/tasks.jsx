import { useReducer } from 'react';

import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { StateInitail, TaskReduccer } from '../context/reduccer/tasks.reduccer';

const Task = () => {
  const [state, dispatch] = useReducer(TaskReduccer, StateInitail);
  const addTask = (task) => {
    console.log(task);
    dispatch({
      type: 'ADD_TASK',
      payload: task,
    });
  };

  console.log(state.tasks);
  return (
    <>
      <TaskForm addTask={addTask} />
      <TaskList tasks={state.tasks} />
    </>
  );
};

export default Task;
