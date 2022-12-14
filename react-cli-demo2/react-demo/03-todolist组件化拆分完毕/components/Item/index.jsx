import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  render() {
    return (
      <li>
        <label>
          <input type="checkbox" />
          <span>{ this.props.msg }</span>
        </label>
        <button className="btn btn-danger" style={{ display: 'none' }}>Delete</button>
      </li>
    )
  }
}
