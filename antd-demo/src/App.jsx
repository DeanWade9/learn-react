/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import './App.css'
import {Button} from 'antd'
import {
  WechatOutlined
} from '@ant-design/icons'
// import 'antd/dist/antd.css'
import 'antd/dist/antd.min.css'

export default class App extends Component {

  render() {
    return (
      <div>
        <h1>AntD</h1>
        <Button type="primary">Button</Button>
        <WechatOutlined />
      </div>
    )
  }
}
