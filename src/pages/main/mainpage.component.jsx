import React from 'react'

import './mainpage.styles.scss'
import Header from '../../components/header/header.component'
import TodoList from '../../components/todo-list/todo-list.component'


class MainPage extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="container">
               <TodoList />
            </div>
        )
    }
}

export default MainPage;

