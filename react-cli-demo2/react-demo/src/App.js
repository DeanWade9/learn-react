import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {

  state = {
    users: [],
    isFirst: true, // 是否第一次打开页面
    isLoading: false,
    err: ''
  }

  updateAppState = (stateObj) => {
    this.setState(stateObj)
  }

  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState} />
        <div className="row">
          <List {...this.state} />
        </div>
      </div>
    )
  }
}
