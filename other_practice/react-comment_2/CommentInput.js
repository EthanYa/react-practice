import React, { Component } from 'react'

class CommentInput extends Component {
  constructor(){
  	super();
  	this.state = {
  		username:'',
  		content:''
  	}
  }
  componentWillMount(){
    this._loadUsername();
  }
  componentDidMount(){
  	this.textarea.focus();
  }  
  _saveUsername(username){
  	localStorage.setItem('username',username)
  }
  _loadUsername(){
  	const username = localStorage.getItem('username')
    if(username){
  		this.setState({username})
  	}
  }
  handleUsernameChange(event){
  	this.setState({username:event.target.value})
  }
  handleContentChange(event){
  	this.setState({content:event.target.value})
  }
  handleSubmit(event){
  	if(this.props.onSubmit){
  		// const {username,content} = this.state
  		this.props.onSubmit({
  			username:this.state.username,
  			content: this.state.content,
  			createdTime: +new Date()//why add + ???
  		})
  	}
  	this.setState({content:''})
  }
  handleUsernameBlur(event){
  	this._saveUsername(event.target.value)
  }
  render() {
    return (
            <div className='comment-input'>
        		<div className='comment-field'>
          			<span className='comment-field-name'>用戶名：</span>
          			<div className='comment-field-input'>
           				 <input value={this.state.username}
           				 		onChange={this.handleUsernameChange.bind(this)}
           				 		onBlur={this.handleUsernameBlur.bind(this)}
           				 />
          			</div>
        		</div>
        		<div className='comment-field'>
          			<span className='comment-field-name'>評論內容 : </span>
          			<div className='comment-field-input'>
            		<textarea ref={(textarea)=>this.textarea=textarea}
            				  value={this.state.content}
            				  onChange={this.handleContentChange.bind(this)}
            		/>
         		 </div>
        		</div>
        		<div className='comment-field-button'>
          			<button
          			onClick={this.handleSubmit.bind(this)}>
            		送出
        		  	</button>
       			 </div>
     		 </div>
    )
  }
}

export default CommentInput