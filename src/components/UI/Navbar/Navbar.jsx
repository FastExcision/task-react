import React from 'react';
import {Link} from "react-router-dom";
import classes from "./Navbar.module.css";


const Navbar = () => {

  return (
    <div className={classes.navbar}>
      <div className={classes.navbar__items}>
        <Link className={classes.navbar__item} to="/about">О сайте</Link>
        <Link className={classes.navbar__item} to="/to-do-list">To Do List</Link>
        <Link className={classes.navbar__item} to="/weather-app">Weather App</Link>
      </div>
    </div>
  );
};

export default Navbar;