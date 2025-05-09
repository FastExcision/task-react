import About from "../pages/About.jsx";
import {Navigate} from "react-router-dom";
import {Route} from "../types/route.ts";
import {ToDoListPage} from "../feat/toDoList";
import {WeatherAppPage} from "../feat/weatherApp";


export const routes: Route[] = [
    {path: '/about', element: <About/>},
    {path: '/to-do-list', element: <ToDoListPage/>},
    {path: '/weather-app', element: <WeatherAppPage/>},
    {path: '/', element: <Navigate to="/about" replace/>},
];

