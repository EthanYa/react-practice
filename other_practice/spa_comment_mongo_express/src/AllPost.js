import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios';
import Post from './Post';
import {setPosts, removePost} from './actions';

class AllPost extends Component {

  constructor (props) {
    super(props);

    this.onRemove = this.onRemove.bind(this);
    
    const {setPosts} = props;

    axios.get('http://localhost:5566/posts')
    .then(function (response) {
      const data = response.data;
      console.log(data);
      setPosts(data);
    })
    .catch(function (error) {
      console.log(error);
    }); 
  }

  onRemove (id) {
    const {removePost} = this.props;
    axios.get('http://localhost:5566/posts/delete/' + id)
    .then(function (response) {
     removePost(id);
    }).catch(function (error) {
      console.log(error);
    }); 
  }

  render () {
    const {posts} = this.props;
    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>標題</th>
            <th>內容</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
        {
          posts.map((post,i) => {
            return (<Post key={i} id={post._id} title={post.title} content={post.content} remove={this.onRemove} />);
          })
        }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    setPosts: (posts) => {
      dispatch(setPosts(posts))
    },

    removePost: (id) => {
      dispatch(removePost(id))
    }
  }
}

// 利用 connect 把 Redux 的 state 變成 AllPost 裡面的 props
export default connect(mapStateToProps, mapDispatchToProps)(AllPost)