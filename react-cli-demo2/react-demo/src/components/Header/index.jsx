import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className="todo-header">
        <input type="text" placeholder="input task name, press enter to confirm" />
      </div>
    )
  }
}