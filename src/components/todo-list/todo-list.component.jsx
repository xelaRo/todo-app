import React from 'react'
import './todo-list.styles.scss'

import data from '../../api/data'

import TodoItem from '../todo-item/todo-item.component'

class TodoList extends React.Component{
    constructor(){
        super();

        this.state = {
            tasks: []
        }
    }

    componentDidMount(){
        this.setState({
            tasks: data
        })
    }


    render(){
        return(
            <div>
                {
                     this.state.tasks.map(task => {
                        return(
                            <TodoItem title={task.title} content={task.content} />
                        )
                    })
                }
            </div>
        )
    }
}

export default TodoList;