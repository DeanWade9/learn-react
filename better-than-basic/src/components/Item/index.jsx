import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Item extends Component {
  state = {
    highlight: false
  }

  static propTypes = {
    updateTaskStatus: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired
  }

  handleMouseAction = (flag) => {
    return () => {
      this.setState({
        highlight: flag
      })
    }
  }

  // change task check status by id
  handleStatusChange = (id) => {
    return (e) => {
      const { updateTaskStatus } = this.props
      const status = e.target.checked
      console.log('param:', id, status)
      updateTaskStatus(id, status)
    }
  }

  // delete task by id
  handleDeleteTask = (id) => {
    return () => {
      this.props.deleteTask(id)
    }
  }

  render() {
    const {taskName, id, done} = this.props
    return (
      <li onMouseEnter={this.handleMouseAction(true)} onMouseLeave={this.handleMouseAction(false)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleStatusChange(id)} />
          <span>{taskName}</span>
        </label>
        <button className="btn btn-danger" style={{display: this.state.highlight ? 'block' : 'none'}} onClick={this.handleDeleteTask(id)}>删除</button>
      </li>
    )
  }
}
