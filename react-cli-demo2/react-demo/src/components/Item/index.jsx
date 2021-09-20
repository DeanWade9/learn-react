import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  state = { mouseHover: false }

  handleMouse = (flag) => {
    return () => {
      this.setState({mouseHover: flag})
    }
  }

  handleCheck = (id) => {
    return () => {
      this.props.changeTodo(id)
    }
  }

  handleDelete = (id) => {
    if (window.confirm('Sure to delete this todo?')) {
      this.props.deleteTodo(id)
    }
  }

  render() {
    const {msg, done, id} = this.props
    return (
      <li onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" defaultChecked={done} onChange={this.handleCheck(id)} />
          <span>{ msg }</span>
        </label>
        <button onClick={() => this.handleDelete(id)} className="btn btn-danger" style={{ display: this.state.mouseHover? 'block' : 'none' }}>Delete</button>
      </li>
    )
  }
}
