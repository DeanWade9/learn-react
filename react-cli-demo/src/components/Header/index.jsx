import React, { Component } from 'react'
import './index.css'

export default class Header extends Component {
  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }

  handleKeyUp = (event) => {
    // 绑定事件的元素和要操作的元素是同一个元素，不用ref，可以用event接收事件源
    // event.keyCode对应按键编码 13代表回车键
    // 如果案件不是回车键13就return 否则获取并输出内容
    if (event.keyCode !== 13) return
    console.log(event.target.value, `event.keyCode:`, event.keyCode)
    this.props.func(event.target.value)
  }
}
