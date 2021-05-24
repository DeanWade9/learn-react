import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {

  // 对接收的props限制类型和必要性
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired
  }

  render() {
    const {todos, updateTodo} = this.props
    return (
      <ul className="todo-main">
        {
          todos.map(todo => {
            // return <Item key={todo.id} id={todo.id} name={todo.name} done={todo.done} />
            return <Item key={todo.id} {...todo} updateTodo={updateTodo} />
          })
        }
      </ul>
    )
  }
}
