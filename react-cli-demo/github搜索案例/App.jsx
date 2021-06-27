import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {

  state = {
    users: [], // 初始值为数组
    isFirst:  true, // 是否第一次打开页面
    isLoading: false, // 是否在加载中
    err: '' // 存储错误信息
  }

  // 更新状态
  updateAppState = (stateObj) => {
    this.setState(stateObj)
  }

  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState} />
        <List {...this.state} />
      </div>
    )
  }
}
