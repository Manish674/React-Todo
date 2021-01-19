import React, { useState, useEffect } from 'react';

const DisplayTodo = () => { 
  const [ task, setTask ] = useState('')
  const [ taskList, setTaskList ] = useState([])
  
  //TODO Delete it later
  useEffect(() => {
    const checkbox = document.getElementById("mycheck")
    if (!checkbox) {
      console.log('There is no checkboxes')
    } else {
      console.log(checkbox.checked)
    }
    const interval = setInterval(() => {
      console.log('Every damn second')
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  
  const renderedList  = taskList.map(({ title }, i) => {
          return (
            <div key={i} className="item">
              <input id={i} type="checkbox" />
              {title}
            </div>
          );
        }) 

  const onButtonClick = () => {
    //TODO: fix setTaskList
    //Create a new object 
    //Then add it to set method
    const newObj = [...taskList, { title: task, completed: false }]
    setTaskList(newObj)
  };

  return (
    <div className="ui container">
      <div className="ui input focus">
        <input value={task} placeholder="Enter task" onChange={(e) => setTask(e.target.value)} />
        <button className="ui button primary" onClick={onButtonClick} >Add</button>
      </div>
      <div className="ui list">
        {renderedList} 
      </div>
    </div>
  )
}

export default DisplayTodo;