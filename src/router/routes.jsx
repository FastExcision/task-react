import About from "../pages/About.jsx";
import React from "react"
import {Navigate} from "react-router-dom";
import {ToDoListPage} from "../feat/toDoList";



export const routes = [
  {path: '/about', element: <About/>},
  {path: '/to-do-list', element: <ToDoListPage/>},
  {path: '/', element: <Navigate to="/about" replace/>},
]
