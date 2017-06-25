import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoItem from './TodoItem'

class TodoList extends Component {
    render() {
        return ( 
        	<div>
        		{this.props.todoList.map((todoItem,i)=>
        			<TodoItem todoItem={todoItem} 
        					  key={i} 
        					  order={i}
        					  //onDelete={this.handleDelete.bind(this)}
                              />
        		 )}
        	</div>
        )
    }
}
const mapStateToProps = (state) => {
  return {
    todoList: state.todoList,
  }
}
export default connect(
  mapStateToProps
)(TodoList)