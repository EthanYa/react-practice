import { combineReducers } from 'redux'
import { SET_RECIPES, FAVORITE_RECIPE } from '../actions/index'

function recipes(state = [], action) {
    switch (action.type) {
        case SET_RECIPES:
            return action.items
        default:
            return state
    }
}

function favoriteRecipes(state = [], action) {
    switch (action.type) {
        case FAVORITE_RECIPE:
            console.log("add")
            return [...state, action.recipe]
        default:
            return state
    }
}

const rootReduer = combineReducers({ recipes, favoriteRecipes })

export default rootReduer
