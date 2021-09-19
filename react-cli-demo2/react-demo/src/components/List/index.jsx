import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {
  render() {
    return (
      <ul className="todo-main">
        <Item msg="aaa" />
        <Item msg="bbb1" />
        <Item msg="ccc2" />
      </ul>
    )
  }
}
