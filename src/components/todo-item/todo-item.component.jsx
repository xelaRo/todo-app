import React from 'react';

import './todo-item.styles.scss';

const TodoItem = ({title,content}) => (
    
   <div className='task-container' >
       <div className='task-title'>
            <h4>{title}</h4>
       </div>
       <div className='task-content'>
            <p>{content}</p>
       </div>
   </div>
)

export default TodoItem;