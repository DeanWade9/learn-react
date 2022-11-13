/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import './App.css'
import {Button} from 'antd'
import {
  WechatOutlined
} from '@ant-design/icons'
// import 'antd/dist/antd.css' // 这样引入会报错
// import 'antd/dist/antd.min.css' // 使用按需引入后 不用写这一行了 

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
