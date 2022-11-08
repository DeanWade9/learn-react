import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {
  render() {
    const {todoList} = this.props
    console.log('todoList:', todoList)
    return (
      <ul className="todo-main">
        {
          todoList.map(item => {
            return <Item {...item} key={item.id} />
          })
        }
      </ul>
    )
  }
}
