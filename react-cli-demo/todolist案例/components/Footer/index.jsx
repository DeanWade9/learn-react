import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

  handleAllCheck = (event) => {
    this.props.checkAllTodos(event.target.checked)
  }

  handleClearAllDone = () => {
    this.props.clearAllDone()
  }

  render() {
    const {todos} = this.props
    // 已完成数量 array的reduce方法,专门用来统计
    // 0是初始值 pre是上一次的值
    const doneCount = todos.reduce((pre, current)=>{ return pre + (current.done ? 1 : 0) }, 0)
    // 总数
    const total = todos.length
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.handleAllCheck} checked={doneCount === total && total!== 0} />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button className="btn btn-danger" onClick={this.handleClearAllDone} >清除已完成任务</button>
      </div>
    )
  }
}
