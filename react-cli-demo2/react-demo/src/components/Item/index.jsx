import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  render() {
    const {msg, done, id} = this.props
    return (
      <li>
        <label>
          <input type="checkbox" defaultChecked={done} />
          <span>{ msg }</span>
        </label>
        <button className="btn btn-danger" style={{ display: 'none' }}>Delete</button>
      </li>
    )
  }
}
