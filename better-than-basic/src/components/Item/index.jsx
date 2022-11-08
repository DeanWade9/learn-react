import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  render() {
    const {taskName, id, done} = this.props
    return (
      <li>
        <label>
          <input type="checkbox"/>
          <span>{taskName}</span>
        </label>
        <button className="btn btn-danger" style={{display:'none'}}>删除</button>
      </li>
    )
  }
}
