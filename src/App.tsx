import "./styles/App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar.tsx";
import {routes} from "./router/routes.tsx";


function App() {

    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                {routes.map(route => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
