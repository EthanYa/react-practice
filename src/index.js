import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './reducers/index'
import { addCharacterById}  from './actions/index'

const store = createStore(rootReducer)
console.log('store.getState()',store.getState())
store.subscribe(()=> console.log('store.dispatch()',store.getState()))
store.dispatch(addCharacterById(2))

ReactDom.render(
	<Provider store = {store}>
		<App/>
	</Provider> 
	, document.getElementById('root'))
