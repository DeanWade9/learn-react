import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Footer extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired
  }

  // totalCount = () => {
  //   return this.props.todos.length
  // }

  // doneCount = () => {
  //   const doneArr = this.props.todos.filter(todo => todo.done)
  //   return doneArr.length
  // }

  handleSelectAll = (event) => {
    console.log(event.target.checked)
    const flag = event.target.checked
    this.props.checkAll(flag)
  }

  render() {
    const {todos} = this.props

    const doneCount = todos.filter(todo => todo.done).length
    const totalCount = todos.length

    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.handleSelectAll} checked={todos.length === doneCount && todos.length !== 0? true : false} />
          <span>Done: {doneCount} / All: {totalCount}</span>
        </label>
        <button className="btn btn-danger">Delete Completed Missions</button>
      </div>
    )
  }
}