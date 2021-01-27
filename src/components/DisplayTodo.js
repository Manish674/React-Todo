import React, { useState } from 'react';
import _ from 'lodash';
import Task from './Task';
import './DisplayTodo.css';

const DisplayTodo = () => { 
  const [ task, setTask ] = useState('')
  //TODO REMOVE these
  const [ taskList, setTaskList ] = useState([
    {
      title: 'Get something to eat.',
      completed: false
    },
    {
      title: 'Do some school work.',
      completed: false
    }
  ])   
  
  //NOTE This func toggles crossed line font / text decoration
  const filterTask = (id) => {
    const newObj = [...taskList]
    if (newObj[id].completed) {
      newObj[id].completed = false
      setTaskList(newObj);
    } else {
      newObj[id].completed = true
      setTaskList(newObj);
    }
    console.log('Task = ', newObj[id])
  }
  
  //NOTE This deltes the tasks
  const deleteTask = (id) => {
    const newObject = [...taskList]
    _.omit(newObject[id], ['title', 'completed'])
    setTaskList(newObject)
  }

  const onButtonClick = () => {
    const newObj = [...taskList, { title: task, completed: false }]
    setTaskList(newObj)
  };

  return (
    <div className="holder">
      <div className="ui input focus">
        <input value={task} placeholder="Enter task" onChange={(e) => setTask(e.target.value)} />
        <button className="ui button primary" onClick={onButtonClick} >Add</button>
      </div>
      <div className="ui list">
        {taskList.map((task, index) => {
          return (
            <Task 
              filterTask={filterTask}
              deleteTask={deleteTask}
              task={task}  
              key={index}
              id={index}
            />
          );
        })}
      </div> 
    </div>
  )
}

export default DisplayTodo;