import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import TodoApp from './components/TodoApp'
import Reducer from './reducers/index'
import './index.css'

const store = createStore(Reducer)
ReactDOM.render(
  <Provider store={store}> 
    <TodoApp />
  </Provider>,
  document.getElementById('root')
)