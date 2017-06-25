import React, { Component } from 'react';
import {hashHistory} from 'react-router';
import {connect} from 'react-redux'
import axios from 'axios';

class NewPost extends Component {

  constructor (props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onContentInput = this.onContentInput.bind(this);

    this.state = {
      title: '',
      content: ''
    }
  }

  onChange (e) {
    this.setState({
      title: e.target.value
    })
  }

  onContentInput (e) {
    this.setState({
      content: e.target.value
    })
  }

  // 發文
  onClick () {
    const {title, content} = this.state;

    // send request
    axios.post('http://localhost:5566/posts', {
      title,
      content
    }).then(function (response) {
      console.log(response);
      hashHistory.push('/posts');
    }).catch(function (error) {
      console.log(error);
    });
    
  }

  render () {
    const {posts} = this.props;
    const {title, content} = this.state;
    return (
      <form className="form-horizontal" role="form">
      <h3>一共有{posts.length}篇文章</h3>
        <div className="form-group">
          <label>標題</label>
          <input name="title" className="form-control" placeholder="title" value={title} onChange={this.onChange}/>
        </div>
        <div className="form-group">
          <label>內容</label>
          <textarea className="form-control" rows="3" onChange={this.onContentInput} value={content}></textarea>
        </div>
        <button type="button" className="btn btn-primary" onClick={this.onClick}>送出</button>
      </form>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts
  }
}

// 利用 connect 把 Redux 的 state 變成 NewPost 裡面的 props
export default connect(mapStateToProps)(NewPost)