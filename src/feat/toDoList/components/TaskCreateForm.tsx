import {useRef} from "react";
import {CreateNewTask, Task, TaskCreateFormProps} from "../types/toDoList";


const TaskCreateForm = ({addTask}: TaskCreateFormProps) => {

    const taskInput = useRef<HTMLInputElement>(null);

    const createNewTask: CreateNewTask = (event) => {
        event.preventDefault()
        if (!taskInput.current || taskInput.current.value.trim() === "") {
            return;
        }
        const newTask: Task = {
            taskName: taskInput.current.value,
            key: Date.now(),
        };
        addTask(newTask);
        taskInput.current.value = "";
    };

    return (
        <form className="toDoList__createForm" onSubmit={createNewTask}>
            <input
                ref={taskInput}
                className="input"
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