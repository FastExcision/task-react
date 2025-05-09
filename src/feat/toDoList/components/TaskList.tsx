import {FC} from "react";
import {TaskListProps} from "../types/toDoList";



const TaskList : FC<TaskListProps> = ({task, deleteTask})=> {

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