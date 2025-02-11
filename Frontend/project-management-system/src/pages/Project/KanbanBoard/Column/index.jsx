import React from 'react'
import Task from "./Task"
import './style.css';

const Column = ({title, tasks}) =>{

    return(
        <div className="flex w-80 flex-col rounded-lg p-4">
            <h2 className="mb-4 font-semibold text-neutral-100">{title}</h2>
            <div className="flex flex-1 flex-col gap-4">{tasks.map((task) =>{
                return <Task key = {task.id} title={task.title} description={task.desc}/>
            })}</div>
        </div>
    )

}
export default Column