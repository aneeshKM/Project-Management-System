import React from 'react'
import './style.css';

const Task = ({title, description}) =>{
    return (
        <div className="cursor-grab rounded-lg bg-neutral-700 p-4 shadow-sm hover:shadow-md">
            <h3 className="font-medium text-neutral-100">{title}</h3>
            <p className="mt-2 text-sm text-neutral-100">{description}</p>
        </div>
    )
}

export default Task