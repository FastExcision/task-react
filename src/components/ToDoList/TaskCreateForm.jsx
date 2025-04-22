import React from 'react';
import ToDoBtn from "./UI/button/ToDoBtn.jsx";
import ToDoInput from "./UI/input/ToDoInput.jsx";

const TaskCreateForm = ({createTask}) => {

  const [task, setTask] = React.useState({body:""});
  const createNewTask = (event) => {
    event.preventDefault()
    const newTask = {
      ...task,
      key: Date.now(),
    }
    createTask(newTask);
    setTask({body:""})
  }

  return (
      <form className={"task__createForm"} onSubmit={createNewTask}>
        <ToDoInput
          value={task.body}
          type="text"
          placeholder="enter task"
          onChange={(event) => setTask({...task, body: event.target.value})}
        />
        <ToDoBtn
          onClick={createNewTask}
        >
          add
        </ToDoBtn>
      </form>
  );
};

export default TaskCreateForm;