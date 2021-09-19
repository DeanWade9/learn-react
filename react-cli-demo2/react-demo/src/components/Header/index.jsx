import React, { Component } from 'react'
import {nanoid} from'nanoid'
import './index.css'

export default class Header extends Component {

  handleKeyUp = (event) => {
    const {keyCode, target} = event
    if (keyCode !== 13) return
    if (target.value.trim() === '') {
      alert('input is empty!')
      target.value = ''
      return
    }
    console.log(target.value, event.keyCode)
    const todoIbj = {id: nanoid(), msg: target.value, done: false}
    this.props.addTodo(todoIbj)
    target.value = ''
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="input task name, press enter to confirm" />
      </div>
    )
  }
}