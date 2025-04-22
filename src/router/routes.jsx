import About from "../pages/About.jsx";
import React from "react"
import {Navigate} from "react-router-dom";
import ToDoList from "../pages/ToDoList.jsx";


export const routes = [
  {path: '/about', element: <About/>},
  {path: '/to-do-list', element: <ToDoList/>},
  {path: '/', element: <Navigate to="/about" replace/>},
]
