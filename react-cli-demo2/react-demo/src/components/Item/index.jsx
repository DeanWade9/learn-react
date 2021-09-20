import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  state = { mouseHover: false }

  handleMouse = (flag) => {
    return () => {
      this.setState({mouseHover: flag})
    }
  }

  render() {
    const {msg, done} = this.props
    return (
      <li onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" defaultChecked={done} />
          <span>{ msg }</span>
        </label>
        <button className="btn btn-danger" style={{ display: this.state.mouseHover? 'block' : 'none' }}>Delete</button>
      </li>
    )
  }
}
