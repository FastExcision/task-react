import About from "../pages/About.jsx";
import React from "react"
import {Navigate} from "react-router-dom";
import Index from "../feat/toDoList/index.jsx";


export const routes = [
  {path: '/about', element: <About/>},
  {path: '/to-do-list', element: <Index/>},
  {path: '/', element: <Navigate to="/about" replace/>},
]
