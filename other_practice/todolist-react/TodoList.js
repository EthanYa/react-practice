import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
	handleDelete(order){
		if(this.props.onDelete){
			this.props.onDelete(order)
		}
	}

    render() {
        return ( 
        	<div>
        		{this.props.todoList.map((todoItem,i)=>
        			<TodoItem todoItem={todoItem} 
        					  key={i} 
        					  order={i}
        					  onDelete={this.handleDelete.bind(this)}/>
        		 )}
        	</div>
        )
    }
}
