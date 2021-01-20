import React from 'react';

const Task = ({ task, id, filterTask }) => {
  const font = task.completed ? 'line-through' : ''
  return(
    <React.Fragment>
      <div className="item">
        <button
          className="ui button"
          onClick={() => filterTask(id)}
          style={{ textDecoration: font }}
        >
          {task.title}
        </button>
      </div>
    </React.Fragment>
  );
};

export default Task; 

// const completeTask = index => {
//             const newTasks = [...tasks];
//             newTasks[index].completed = true;
//             setTasks(newTasks);
//         };