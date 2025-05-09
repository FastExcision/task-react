import {useState} from 'react';
import TaskCreateForm from "./components/TaskCreateForm.jsx";
import './styles/toDoList.css'
import TaskList from "./components/TaskList.jsx";
import {AddTask, DeleteTask, Task} from "./types/toDoList";


const ToDoListPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask: AddTask = (newTask) => {
    setTasks(prevTask => [...prevTask, newTask]);
  }
  const deleteTask: DeleteTask = (key) => {
    setTasks(tasks.filter(task => task.key !== key));
  }

  return (
    <div className="toDoListPage">
      <TaskCreateForm  addTask={addTask} />
      {tasks.map((task) => (
        <TaskList task={task} key={task.key} deleteTask={deleteTask}/>
      ))}
    </div>
  );
};

export {ToDoListPage}