import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  // to set the done property of a batch of tasks at the same time
  handleSelectAll = (e) => {
    const checked = e.target.checked
    this.props.selectAll(checked)
  }

  // to delete all selected tasks at the same time
  clearAllDone = () => {
    this.props.deleteAllSelected()
  }
  render() {
    const { todoList } = this.props

    const doneCount = todoList.reduce((prev, cur) => {
      if (cur.done) {
        return prev + 1
      } else {
        return prev
      }
    }, 0)

    const totalCount = todoList.length
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={doneCount === totalCount ? true : false} onChange={this.handleSelectAll} />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{totalCount}
        </span>
        <button className="btn btn-danger" onClick={this.clearAllDone}>清除已完成任务</button>
      </div>
    )
  }
}
