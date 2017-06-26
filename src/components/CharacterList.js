import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addCharacterById } from '../actions/index'
class CharacterList extends Component {
    render() {
        return (
        	<div>
        		<h4>Characters</h4>
        		<ul>
        			{
        				this.props.characters.map((character)=>{
        				    return( //不要忘記
        					 	 <li key={ character.id }>
        							<div> { character.name } </div>
        					        <div onClick={()=>this.props.addCharacterById(character.id)} >+</div>
        					  	</li>
        					)
        				})
        			}
        		</ul>
        	</div>
        )
    }
}

function mapStateToProps(state) {
    return {
        characters: state.characters
    }
}

function mapDispatchToProps(dispatch){
	return {
		addCharacterById: (id)=>{
			dispatch(addCharacterById(id))
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(CharacterList)
