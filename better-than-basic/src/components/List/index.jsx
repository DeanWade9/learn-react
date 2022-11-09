import React, { Component } from 'react'
import Item from '../Item'
import PropTypes from 'prop-types'

import './index.css'

export default class List extends Component {
  static propTypes = {
    todoList: PropTypes.array.isRequired,
    updateTaskStatus: PropTypes.func.isRequired
  }
  render() {
    const {todoList, updateTaskStatus} = this.props
    console.log('todoList:', todoList)
    return (
      <ul className="todo-main">
        {
          todoList.map(item => {
            return <Item {...item} key={item.id} updateTaskStatus={updateTaskStatus} />
          })
        }
      </ul>
    )
  }
}
