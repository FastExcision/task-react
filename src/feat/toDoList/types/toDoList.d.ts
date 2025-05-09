import {FormEvent} from "react";

export type Task = {
    taskName: string;
    key: number;
}
export type AddTask = (newTask: Task) => void;
export type DeleteTask = (key: Task["key"]) => void;

export type TaskCreateFormProps = {
    addTask: AddTask;
}

export type TaskListProps = {
    task: Task;
    deleteTask: DeleteTask;
}

export type CreateNewTask = (event: FormEvent<HTMLFormElement>) => void;