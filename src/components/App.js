import React, { Component } from 'react'
import SearchRecipes from './SearchRecipes'
import RecipeList from './RecipeList'
import FavoriteRecipeList from './FavoriteRecipeList'

export default class App extends Component {
	render(){
		return(
			<div>
				<h2>Recipe Finder</h2>
				<SearchRecipes />
				<RecipeList />
				<FavoriteRecipeList />
			</div>
			)
	}
}
