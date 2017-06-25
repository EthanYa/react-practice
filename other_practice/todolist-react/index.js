import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import TodoApp from './TodoApp'
// import commentsReducer from './reducers/comments'
import './index.css'

// const store = createStore(commentsReducer)
//store={store}
ReactDOM.render(
  <Provider > 
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);