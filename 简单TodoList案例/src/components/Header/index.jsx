import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import PropTypes from 'prop-types'
import './index.css'

export default class Header extends Component {
  static propTypes = {
    addTask: PropTypes.func.isRequired
  }
  handleKeyUp = (e) => {
    const {target, keyCode} = e
    const {addTask} = this.props
    if (keyCode == 13) {
      if (target.value.trim() == '') {
        alert('empty input! try again!')
        target.value = ''
        return
      } else {
        const taskObj = { id: nanoid(), taskName: target.value, done: false}
        addTask(taskObj)
        target.value = ''
       }
      }
    }

    render() {
      return (
        <div className="todo-header">
          <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.handleKeyUp} />
        </div>
      )
    }
}
