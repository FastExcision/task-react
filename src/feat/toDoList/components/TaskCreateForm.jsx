import React from 'react';

const TaskCreateForm = ({createTask}) => {

  const createNewTask = (event) => {
    event.preventDefault()
    if (event.target.newTask.value === "") {
      return;
    }
    const newTask = {
      taskName: event.target.newTask.value,
      key: Date.now(),
    }
    createTask(newTask);
    event.target.newTask.value = ""
  }

  return (
    <form className="toDoList__createForm" onSubmit={createNewTask}>
      <input
        className="input"
        name="newTask"
        type="text"
        placeholder="enter task"
      />
      <button
        className="btn"
        type="submit"
      >
        add
      </button>
    </form>
  );
};

export default TaskCreateForm;