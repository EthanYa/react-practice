import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addTodo} from '../reducers/index'
class TodoInput extends Component {
	constructor(){
		super()
		this.state = {
			todoItem : ''
		}
	}
	handleChange(e){
		this.setState({todoItem:e.target.value})
	}
	handleSubmit(){
		// const {todoItem} = this.state
		// this.props.onSubmit(todoItem)
		// this.setState({todoItem:''})
		const {todoList,onSubmit} = this.props
    const {todoItem} = this.state
		onSubmit(todoItem)
		todoList.map((item)=>console.log(item))
		

	}
    render() {
    	return(
    			<div>
    				<input onChange={this.handleChange.bind(this)} 
    					   value={this.state.todoItem}/>
    				<button 
    				// onClick={this.handleSubmit.bind(this)}
    				onClick={this.handleSubmit.bind(this)}
    				> Add </button>
    			</div>
    		)
    }
}

const mapStateToProps = (state) => {
  return {
    todoList: state.todoList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (todoItem) => {
      dispatch(addTodo(todoItem))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoInput)