import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  state = { mouse: false } // 标识鼠标移入移出

  // 鼠标移入移出回调
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag })
    }
  }

  // 勾选取消勾选回调
  handleCheck = (id) => {
    return (event) => {
      // console.log(event.target.checked)
      this.props.updateTodo(id, event.target.checked)
    }
  }

  // 删除回调
  handleDelete = (id) => {
    if(window.confirm('确认删除?')) {
      this.props.deleteTodo(id)
    }
  }

  render() {
    const { id, name, done } = this.props
    const { mouse } = this.state
    return (
      <li style={{backgroundColor: mouse? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} >
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
          <span>{ name }</span>
        </label>
        <button className="btn btn-danger" style={{ display: mouse? 'block' : 'none' }} onClick={() => this.handleDelete(id)} >删除</button>
      </li>
    )
  }
}
