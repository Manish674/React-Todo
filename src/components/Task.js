import React from 'react';

const Task = ({ deleteTask, task, id, filterTask }) => {
  const font = task.completed ? 'line-through' : ''
  return(
    <React.Fragment>
      <div className="item">
        <div
          className="ui button"
          onClick={() => filterTask(id)}
          style={{ textDecoration: font }}
        >
          {task.title}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Task; 
