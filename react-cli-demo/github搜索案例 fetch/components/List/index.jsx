import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {

  state = {
    users: [], // 初始值为数组
    isFirst:  true, // 是否第一次打开页面
    isLoading: false, // 是否在加载中
    err: '' // 存储错误信息
  }

  componentDidMount() {
    // 订阅
    this.token = PubSub.subscribe('changeState', (_, data) => {
      console.log('receiving data:', data)
      this.setState(data)
    })
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }

  render() {
    const {users, isFirst, isLoading, err} = this.state
    return (
      <div className="row">
        {
          isFirst ? <h2>Welcome!</h2> :
          isLoading ? <h2>Loading...</h2> :
          err ? <h2 style={{color: 'red'}}>{err}</h2> :
          this.state.users.map(userObj => {
            return (
              <div key={userObj.id} className="card">
                <a href={userObj.html_url} target="_blank" rel="noreferrer">
                  <img alt="avatar" src={userObj.avatar_url} style={{width: '100px'}}/>
                </a>
                <p className="card-text">{userObj.login}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}