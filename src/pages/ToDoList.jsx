import React, {useState} from 'react';
import TaskCreateForm from "../components/ToDoList/TaskCreateForm.jsx";
import '../styles/ToDoList.css'
import TaskList from "../components/ToDoList/TaskList.jsx";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  }
  const deleteTask = (key) => {
    setTasks(tasks.filter(task => task.key !== key));
  }

  return (
    <div className={"to-do-list"}>
      <TaskCreateForm  createTask={addTask} />
      {tasks.map((task) => (
        <TaskList task={task} key={task.key} deleteTask={deleteTask}/>
      ))}
    </div>
  );
};

export default ToDoList;