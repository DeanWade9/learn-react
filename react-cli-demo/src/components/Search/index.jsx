import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

  search = () => {
    // 获取用户输入
    const {keyWordElement: {value: keyword}} = this
    console.log(keyword)
    // 发送网络请求
    axios.get(`http://localhost:3000/api1/search/users?q=${keyword}`).then(
      response => {
        this.props.saveUsers(response.data.items)
      },
      error => {console.log('error:',error)}
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

