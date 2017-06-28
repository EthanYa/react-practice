import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions/index'
import { createCharacter } from './helpers'
import characters_json from '../data/characters.json'

export function characters(state = characters_json, action) {
    switch (action.type) {
        case ADD_CHARACTER:
            let characters = state.filter((character) => character.id !== action.id)
            return characters
        case REMOVE_CHARACTER:
            characters = [...state, createCharacter(action.id)]
            return characters
        default:
            return state
    }
}
