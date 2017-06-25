import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'


export default class TodoApp extends Component {
	constructor(){
		super()
		this.state = {
			todoList : []
		}
	}
	handleSubmit(todoItem){
		//利用props將 func 傳下去給 TodoInput 用，以便取使用它的this.state.todoItem 
		const {todoList} = this.state
		todoList.push(todoItem)
		this.setState({todoList:todoList})
		// todoList.map((todoIttem)=>console.log(todoIttem))
	}
	handleDelete(order){
		const {todoList} = this.state
		todoList.splice(order,1)
		this.setState({todoList:todoList})
	}
    render() {
        return (
        	<div className='wrapper'>
        		<TodoInput onSubmit={this.handleSubmit.bind(this)}/>
        		<TodoList todoList={this.state.todoList}
        				  onDelete={this.handleDelete.bind(this)}
        				  />
			</div>
        )
    }
}
