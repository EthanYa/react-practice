import React, { Component } from 'react'
import SearchRecipes from './SearchRecipes'
export default class App extends Component {
	render(){
		return(
			<div>
				<h2>Recipe Finder</h2>
				<SearchRecipes />
			</div>
			)
	}
}
