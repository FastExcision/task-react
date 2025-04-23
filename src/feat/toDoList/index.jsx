import React, {useState} from 'react';
import TaskCreateForm from "./components/TaskCreateForm.jsx";
import './styles/toDoList.css'
import TaskList from "./components/TaskList.jsx";

const Index = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  }
  const deleteTask = (key) => {
    setTasks(tasks.filter(task => task.key !== key));
  }

  return (
    <div className="toDoListPage">
      <TaskCreateForm  createTask={addTask} />
      {tasks.map((task) => (
        <TaskList task={task} key={task.key} deleteTask={deleteTask}/>
      ))}
    </div>
  );
};

export default Index;