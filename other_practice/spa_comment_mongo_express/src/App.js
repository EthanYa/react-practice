import React, { Component } from 'react';
import { Link } from 'react-router'

export default class App extends Component {
  render () {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">SPA 簡易留言板</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to="/posts">所有貼文</Link></li>
              <li><Link to="/new_post">留言</Link></li>
            </ul>
          </div>
          {this.props.children} 
        </div>
      </nav>
    );
  }
}
