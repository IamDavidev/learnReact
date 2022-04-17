import { useForm } from 'react-hook-form';

const TaskForm = ({ addTask }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const createTask = ({ task, body }) => {
    addTask({
      task,
      body,
      id: body,
    });
  };

  return (
    <>
      <h1>Task List</h1>
      Errors
      <form onSubmit={handleSubmit(createTask)} className="form">
        <input
          type="text"
          placeholder="Task"
          {...register('task', { required: true, maxLength: 50 })}
        />
        <textarea
          name="body"
          id="bodyId"
          cols="30"
          rows="10"
          placeholder="body"
          {...register('body', { required: true, maxLength: 500 })}
        />
        <button>Add Task</button>
        {errors.task && <p>Task is required</p>}
      </form>
    </>
  );
};

export default TaskForm;
