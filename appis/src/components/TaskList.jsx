const TaskList = ({ tasks = [] }) => {
  console.log(tasks);
  if (!tasks.length) {
    return <div className="NoTasks">tasks are empty</div>;
  }
  return (
    <>
      <h1>Task List</h1>
      {tasks.map((task) => {
        return (
          <div key={task.id} className="task">
            <span className="titleTask">{task.task}</span>
            <p className="bodyTask">{task.body}</p>
          </div>
        );
      })}
    </>
  );
};

export default TaskList;
