import React, { Component } from 'react'

export default class TodoInput extends Component {
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
		const {todoItem} = this.state
		this.props.onSubmit(todoItem)
		this.setState({todoItem:''})
	}
    render() {
    	return(
    			<div>
    				<input onChange={this.handleChange.bind(this)} 
    					   value={this.state.todoItem}/>
    				<button onClick={this.handleSubmit.bind(this)}> Add </button>
    			</div>
    		)
    }
}
