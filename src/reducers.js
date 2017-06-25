import { combineReducers } from 'redux'
import { SET_POSTS, REMOVE_POST } from './actions'

// 設定預設 state
const defaultState = {
  posts: []
}

// 底下每一個就是一個 reducer
function posts(state = defaultState, action) {
  switch (action.type) {

    // 回傳設定好 posts 的 state
    case SET_POSTS:
      return {
        ...state,
        posts: action.posts
      }

    // 回傳刪除後的 state
    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.id)
      }
    default:
      return state
  }
}

// 其實有多個 reducer 才需要用這個
const App = combineReducers({
  posts
})

export default App