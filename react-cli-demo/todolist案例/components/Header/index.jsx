import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {

  // 对接收的props限制类型和必要性
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }

  // 键盘事件回调
  handleKeyUp = (event) => {
    // 绑定事件的元素和要操作的元素是同一个元素，不用ref，可以用event接收事件源
    // event.keyCode对应按键编码 13代表回车键
    // 如果案件不是回车键13就return 否则获取并输出内容

    // 解构获取keyCode和target
    const {keyCode, target} = event
    // 判断是否是按回车键
    if (keyCode !== 13) return
    // 添加的todo不能为空
    if (target.value.trim() === '') {
      alert('输入不能为空')
      return
    }
    // 准备好一个todoObj
    const todoObj = {id: nanoid(), name: target.value, done: false}
    // 将todoObj传递给App
    this.props.addTodo(todoObj)
    // 清空刚才的输入
    target.value = ''
  }
}
