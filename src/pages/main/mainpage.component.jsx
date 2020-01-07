import React from 'react'

import './mainpage.styles.scss'

import TodoList from '../../components/todo-list/todo-list.component';

import data from '../../api/data';

class MainPage extends React.Component{
    constructor(){
        super();

        this.state = {
            tasks: []
        }
    }

    componentDidMount(){
        // console.log(data)
        this.setState({
            tasks: data
        })
    }

    render(){
        return(
            <div>
                <TodoList tasks={this.state.tasks} />
            </div>
        )
    }
}

export default MainPage;

