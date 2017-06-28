import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addCharacterById } from '../actions/index'
class CharacterList extends Component {
    render() {
        return (
        	<div>
        		<h4>Characters</h4>
        		<ul className="list-group">
        			{
        				this.props.characters.map((character)=>{
        				    return( //不要忘記
        					 	 <li key={ character.id } className="list-group-item">
        							<div className="list-item"> { character.name } </div>
        					        <div onClick={()=>this.props.addCharacterById(character.id)} 
        					        	className="list-item right-button">+</div>
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
