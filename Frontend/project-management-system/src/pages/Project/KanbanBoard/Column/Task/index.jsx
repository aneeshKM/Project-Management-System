import React from 'react'
import './style.css';
import { useDraggable } from '@dnd-kit/core';

const Task = ({ task }) => {
    const { attributes, listeners, transform, setNodeRef } = useDraggable({          // useDraggable hook is used to create task draggable
        id: task.id                                                                  // id is used to connect to DndContext
    })

    const style = transform ? {                                                      // hold the values of x and y coordinates and styling when dragging.
        transform: `translate(${transform.x}px, ${transform.y}px)`                   // Checking first if we are having transform and if no, undefined.
    } : undefined
    return (
        <div ref={setNodeRef}
            {...listeners}
            {...attributes}
            className="cursor-grab rounded-lg bg-neutral-700 p-4 shadow-sm hover:shadow-md"
            style={style}>
            <h3 className="font-medium text-neutral-100">{task.title}</h3>
            <p className="mt-2 text-sm text-neutral-100">{task.description}</p>
        </div>
    )
}

export default Task