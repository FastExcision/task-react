import React from 'react';
import classes from './ToDoInput.module.css';

const MyInput = ({...props}) => {
    return (
        <input {...props}  className={classes.MyInput}/>
    );
};

export default MyInput;