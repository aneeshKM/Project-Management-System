import React from 'react'
import Task from "./Task"
import './style.css';
import { useDroppable } from '@dnd-kit/core';

const Column = ({ column, tasks }) => {

    const { setNodeRef } =                                      // Now we have to connect this column to DndContext
        useDroppable({                                          // for that we are using this hook useDroppable which will connect this column
            id: column.id                                       // and after dropping the task into other column or same, it will give id to the over in handleDrag function
        })

    return (
        <div className="flex w-80 flex-col rounded-lg p-4">
            <h2 className="mb-4 font-semibold text-neutral-100">{column.title}</h2>
            <div ref={setNodeRef} className="flex flex-1 flex-col gap-4">{tasks.map((task) => {
                return <Task key={task.id} task={task} />
            })}</div>
        </div>
    )

}
export default Column