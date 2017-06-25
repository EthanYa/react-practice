import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import AppReducer from './reducers'
import App from './App';
import AllPost from './AllPost';
import NewPost from './NewPost';


import './bootstrap-3.3.7-dist/css/bootstrap.min.css';

// 建立 store，把 reducer 傳進去
let store = createStore(AppReducer);
ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={AllPost} />
          <Route path="posts" component={AllPost}/>
          <Route path="new_post" component={NewPost} />
        </Route>
      </Router>
    </Provider>
  ),
  document.getElementById('root')
);
