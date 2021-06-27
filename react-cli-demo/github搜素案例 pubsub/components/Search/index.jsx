import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {

  search = () => {
    // 获取用户输入
    const {keyWordElement: {value: keyword}} = this
    // 发送请求前通知List更新状态: 不是第一次打开页面 开始加载
    // this.props.updateAppState({isFirst: false, isLoading: true})
    PubSub.publish('changeState', { isFirst: false, isLoading: true })
    // 发送网络请求
    axios.get(`http://localhost:3000/api1/search/users?q=${keyword}`).then(
      response => {
        // 请求成功后通知List更新状态
        // this.props.updateAppState({isLoading: false, users: response.data.items})
        PubSub.publish('changeState', {isLoading: false, users: response.data.items})
      },
      error => {
        // this.props.updateAppState({isLoading: false, err: error.message})
        PubSub.publish('changeState', {isLoading: false, err: error.message})
      }
    )
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search"/>&nbsp;
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}

