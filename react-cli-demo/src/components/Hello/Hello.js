import React, { Component } from 'react'
import './Hello.css'

// 定义并且暴露Hello组件
export default class Hello extends Component {
  render () {
    return <h2 className="title">Hello React!</h2>
  }
}