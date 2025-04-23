import React from 'react';
import classes from './ToDoBtn.module.css'

const ToDoBtn = ({children, ...props}) => {
  return (
      <button {...props} className={classes.MyBtn}>
        {children}
      </button>
  );
};

export default ToDoBtn;