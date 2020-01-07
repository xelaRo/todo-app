import React from 'react'
import './todo-list.styles.scss'

import TodoItem from '../todo-item/todo-item.component'

const TodoList = (props) => (

    <div className='list-container'>
        <div className='list-title'>
            <h3>Tasks</h3>
        </div>
        <div className='list-content'>
            {
                props.tasks.map(task => {
                    return (
                        <TodoItem key={task.id} title={task.title} content={task.content}/>
                    )
                })
            }
        </div>
    </div>
)

export default TodoList;