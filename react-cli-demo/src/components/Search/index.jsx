import React, { Component } from 'react'
import PubSub from 'pubsub-js'
// import axios from 'axios'

export default class Search extends Component {

  search = async() => {
    // 获取用户输入
    const {keyWordElement: {value: keyword}} = this
    // 发送请求前通知List更新状态: 不是第一次打开页面 开始加载
    PubSub.publish('changeState', { isFirst: false, isLoading: true })
    // 发送网络请求
    //#region
    // axios.get(`http://localhost:3000/api1/search/users?q=${keyword}`).then(
    //   response => {
    //     // 请求成功后通知List更新状态
    //     PubSub.publish('changeState', {isLoading: false, users: response.data.items})
    //   },
    //   error => {
    //     PubSub.publish('changeState', {isLoading: false, err: error.message})
    //   }
    // )
    //#endregion
    
    //#region fetch未优化版本
    /*
    fetch(`http://localhost:3000/api1/search/users?q=${keyword}`).then(
      response => {
        console.log('successfully connect to the server!')
        return response.json()
      },
      error => {
        console.log('connection to the server failed!', error)
        // 从这里以后就不会往下走了 因为服务器都没连接成功 往下走没意义
        return new Promise(() => {})
      }
    ).then(
      response => {
        console.log('retrieving data success!', response)
      },
      error => {
        console.log('retrieving data error!', error)
      }
    )
    */
   //#endregion

    //#region  
  // 优化后代码
  //  fetch(`http://localhost:3000/api1/search/users?q=${keyword}`).then(
  //    response => {
  //      console.log('连接服务器成功!')
  //      return response.json()
  //    }
  //  ).then(
  //    response => {
  //      console.log('获取数据成功!')
  //      console.log(response)
  //    }
  //  ).catch(error => console.log('出错了!', error))
  // }
  //#endregion
    
    // 再次优化后的代码
    try {
      const response = await fetch(`http://localhost:3000/api1/search/users?q=${keyword}`)
      console.log(response)
      const data = await response.json()
      console.log(data)
      // 请求成功后通知List更新状态
      PubSub.publish('changeState', {isLoading: false, users: data.items})
    } catch (error) {
      console.log(error)
      PubSub.publish('changeState', {isLoading: false, err: error.message})
    }
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

