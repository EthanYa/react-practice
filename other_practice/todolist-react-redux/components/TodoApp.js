import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'


export default class TodoApp extends Component {
    render() {
        return (
        	<div className='wrapper'>
        		<TodoInput //onSubmit={this.handleSubmit.bind(this)}
        		/>
        		<TodoList //todoList={this.state.todoList}
        				  //onDelete={this.handleDelete.bind(this)}
        				  />
			</div>
        )
    }
}
