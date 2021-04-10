import React from 'react';
import './style.css';

const Task = ({ deleteTask, task, id, filterTask }) => {
  const font = task.completed ? 'line-through' : ''
  return(
    <React.Fragment>
        <div
          className="task"
          onClick={() => filterTask(id)}
          style={{ textDecoration: font }}
        >
          {task.title}
        </div>
    </React.Fragment>
  );
};

export default Task; 
