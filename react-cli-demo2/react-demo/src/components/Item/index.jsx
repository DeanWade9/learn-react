import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  handleMouseEnter = () => {
    this.refs.btn.style.display = 'block'
  }

  handleMouseLeave = () => {
    this.refs.btn.style.display = 'none'
  }

  render() {
    const {msg, done} = this.props
    return (
      <li onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <label>
          <input type="checkbox" defaultChecked={done} />
          <span>{ msg }</span>
        </label>
        <button ref="btn" className="btn btn-danger" style={{ display: 'none' }}>Delete</button>
      </li>
    )
  }
}
