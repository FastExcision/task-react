import {Link} from "react-router-dom";
import classes from "./Navbar.module.css";


const Navbar = () => {

  return (
    <nav className={classes.navbar}>
      <menu className={classes.navbar__items}>
        <Link className={classes.navbar__item} to="/about">О сайте</Link>
        <Link className={classes.navbar__item} to="/to-do-list">To Do List</Link>
        <Link className={classes.navbar__item} to="/weather-app">Weather App</Link>
      </menu>
    </nav>
  );
};

export default Navbar;