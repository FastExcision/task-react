import React from 'react';

const TaskList = ({task, deleteTask}) => {

  return (
    <div
      className="taskList__item"
      onClick={() => deleteTask(task.key)}
    >
      <strong>{task.body}</strong>
    </div>
  );
};

export default TaskList;