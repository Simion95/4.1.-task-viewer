import React from 'react'
import TaskCard from '../task-card/TaskCard'
import './TaskViewer.css'

const TaskViewer = (props) => {
    return (
     <>
        {props.data.map(data =>(
        <TaskCard
        key={data.id}
        id={data.id}
        status={data.status}
        name={data.name}
        date={data.dueDate}        
        />
      ))}
</>
  )
}

export default TaskViewer