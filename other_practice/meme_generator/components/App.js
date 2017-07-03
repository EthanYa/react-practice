import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../bootstrap-3.3.7-dist/css/bootstrap.css'
import '../index.css'
import MemeItem from './MemeItem'
import MyMeme from './MyMemes'
import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
// import { fetchMemes } from '../actions/index'

class App extends Component {
	constructor(){
		super()

		this.state = {
			memeLimit: 10,
			test0:'',
			test1:''
		}
	}
	render(){
		// <div onClick={()=>this.props.fetchMemes()}><h3>Feth</h3></div>
		return(
			<div>
				<h2>Welecom to the Meme Generator</h2>
				<MyMeme/>
				<h4><i>Write Some Text</i></h4>
				<Form inline>
					<FormGroup>
						<ControlLabel>Top</ControlLabel>
						{' '}
						<FormControl 
						type="text"
						onChange={(event)=>{this.setState({test0: event.target.value})}}
						></FormControl>
					</FormGroup>
					{' '}
					<FormGroup>
						<ControlLabel>Bottom</ControlLabel>
						{' '}
						<FormControl 
						type="text"
						onChange={(event)=>{this.setState({test1: event.target.value})}}
						></FormControl>
					</FormGroup>
				</Form>
				{
					this.props.memes.slice(0,this.state.memeLimit).map((meme,index)=>{
						return(
							<MemeItem 
								key={index} 
								meme={meme} 
								test0={this.state.test0}
								test1={this.state.test1}
								/>
							)
					})
				}
				<div className="meme-button"
				onClick={()=>{this.setState({memeLimit:this.state.memeLimit+10})}}>
				Load 10 more memes...</div>
			</div>
			)
	}
}

function mapStateToProps(state){
	return state
}

// function mapDispatchToProps(dispatch){
// 	return{
// 		fetchMemes:()=>{dispatch(fetchMemes())}
// 	}
// }

export default connect(mapStateToProps,null)(App)