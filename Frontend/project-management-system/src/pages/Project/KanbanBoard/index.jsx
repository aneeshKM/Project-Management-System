import React, { useState } from 'react';
import Column from './Column';
import './style.css';

const COLUMNS = [
  {id:'BACKLOG', title: 'backlog'},
  {id:'SELECTED', title:'selected'},
  {id:'INPROGRESS', title:'inprogress'},
  {id:'DONE', title:'done'},
];

const INITIAL_TASK = [
  {id:1,
    title:'New Research',
    desc:'New task is here',
    status:'BACKLOG'
  },
  {id:2,
    title:'New Research 2',
    desc:'New task is here',
    status:'SELECTED'
  },
  {id:3,
    title:'New Research 3',
    desc:'New task is here',
    status:'INPROGRESS'
  },
  {id:4,
    title:'New Research 4',
    desc:'New task is here',
    status:'INPROGRESS'
  },
  {id:5,
    title:'New Research 5',
    desc:'New task is here',
    status:'BACKLOG'
  },
]

const KanbanBoard = () =>{
  const [tasks, setTasks] = useState(INITIAL_TASK);

  return(
    <div className='p-4'>
      <div className='flex gap-8'>
        {COLUMNS.map((column) =>{
          return (<Column key ={column.id} 
            title ={column.title} 
            tasks = {tasks.filter(task => task.status === column.id)
            }/>
          );
        })}
      </div>
    </div>
  )
}


export default KanbanBoard;
