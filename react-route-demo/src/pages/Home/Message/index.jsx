import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
  state = {
    messageArr: [
      { id: '1', title: 'msg1' },
      { id: '2', title: 'msg2' },
      { id: '3', title: 'msg3' }
    ]
  }
  render() {
    return (
      <div className="message">
        <ul>
          {
            this.state.messageArr.map(e => {
              return (
                <li key={e.id}>
                  {/* 向路由组件传递params参数 */}
                  {/* <Link to={`/home/message/detail/${e.id}/${e.title}`}>{e.title}</Link> */}
                  
                  {/* 向路由传递search参数 */}
                  <Link to={`/home/message/detail/?id=${e.id}&title=${e.title}`}>{e.title}</Link>
                </li>
              )
            })
          }
        </ul>
        <hr />
        {/* 声明接收params参数 */}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail}></Route> */}

        {/* 接收search参数无需声明 正常注册路由即可 */}
        <Route path="/home/message/detail" component={Detail}></Route>
      </div>
    )
  }
}
