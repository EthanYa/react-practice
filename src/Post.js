import React, { Component } from 'react';

export default class Post extends Component {

  constructor (props) {
    super(props);

    this.onRemove = this.onRemove.bind(this);
  }

  onRemove () {
    const {remove, id} = this.props;
    remove(id);
  }

  render () {
    const {title, content} = this.props;
    return (
      <tr>
        <td>{title}</td>
        <td>{content}</td>
        <td>
          <a className="btn btn-danger" onClick={this.onRemove}>刪除</a>
        </td>
      </tr>
    );
  }
}