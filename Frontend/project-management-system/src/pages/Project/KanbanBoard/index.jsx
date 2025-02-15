import React, { useState } from 'react';
import Column from './Column';
import './style.css';
import { DndContext } from '@dnd-kit/core';

const COLUMNS = [
  { id: 'BACKLOG', title: 'backlog' },
  { id: 'SELECTED', title: 'selected' },
  { id: 'INPROGRESS', title: 'inprogress' },
  { id: 'DONE', title: 'done' },
];

const INITIAL_TASK = [
  {
    id: 1,
    title: 'New Research',
    desc: 'New task is here',
    status: 'BACKLOG'
  },
  {
    id: 2,
    title: 'New Research 2',
    desc: 'New task is here',
    status: 'SELECTED'
  },
  {
    id: 3,
    title: 'New Research 3',
    desc: 'New task is here',
    status: 'INPROGRESS'
  },
  {
    id: 4,
    title: 'New Research 4',
    desc: 'New task is here',
    status: 'INPROGRESS'
  },
  {
    id: 5,
    title: 'New Research 5',
    desc: 'New task is here',
    status: 'BACKLOG'
  },
]

const KanbanBoard = () => {
  const [tasks, setTasks] = useState(INITIAL_TASK);

  const handleDragEnd = (event) => {                             // event is DragEndEvent from dnd core
    const { active, over } = event

    if (!over) return                                           // if drage is not over then the function should not be executed

    const taskId = active.id                                    // id of task that we will be dropping
    const nesStatus = over.id                                   // It is of type Task['status'] basically a column id we are dropping over  

    // now updating the task
    setTasks(() => tasks.map((task) =>                          // so basically here we are checking whether the task is active one or not
      task.id === taskId ? {                                    // and if it is active one, then we are assining a new status to it
        ...task,
        status: nesStatus
      } :
        task,
    ))

  }

  return (
    <div className='p-4'>
      <div className='flex gap-8'>
      <DndContext onDragEnd={handleDragEnd}>
        {COLUMNS.map((column) => {
          return (<Column key={column.id}
            column={column}
            tasks={tasks.filter(task => task.status === column.id)
            } />
          );
        })}
        </DndContext>
      </div>
    </div>
  )
}


export default KanbanBoard;
