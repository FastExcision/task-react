import {TaskListProps} from "../types/toDoList";


const TaskList= ({task, deleteTask} :TaskListProps )=> {

  return (
    <div
      className="taskList__item"
      onClick={() => deleteTask(task.key)}
    >
      <strong>{task.taskName}</strong>
    </div>
  );
};

export default TaskList;