import React, { Component } from 'react'

export default class TodoItem extends Component {
	constructor(){
		super()
		this.state = {
			done:false
		}
	}
	handleDelete(){
		if(this.props.onDelete){
			this.props.onDelete(this.props.order)
		}
	}
	handleMark(){
		const {done}=this.state
		this.setState({done:!done})
		console.log(done)

	}
    render() {
    	const {order,todoItem} = this.props
        const {done} = this.state
        return (
        		<div>
        		 	<p>
        		 		<span>{order+1} . </span>
        		 		<span onClick={this.handleMark.bind(this)}
        		 			  style={{textDecoration:done?'line-through':'none'}}>{todoItem}</span>
        		 		<span style={{float:'right'}}
        		 			  onClick={this.handleDelete.bind(this)}>刪除</span>
        		 	</p>
        		</div>
        	)
    }
}
//{textDecoration:'line-through'}