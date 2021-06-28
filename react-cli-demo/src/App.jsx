import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import Home from './pages/Home' // 路由组件
import About from './pages/About'// 路由组件
import Header from './components/Header' // 一般组件
import MyNavLink from './components/MyNavLink'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header a={1}></Header>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生html中 用a标签跳转不同页面 */}
              {/* <a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a> */}

              {/* react中 靠路由链接实现切换组件 */}
              {/* <BrowserRouter> */}
              {/* <NavLink activeClassName="biu" className="list-group-item" to="/about">About</NavLink> */}
              {/* <NavLink activeClassName="biu" className="list-group-item" to="/home">Home</NavLink> */}
              <MyNavLink to="/about" title="About"></MyNavLink>
              <MyNavLink to="/home" title="Home"></MyNavLink>
              {/* </BrowserRouter> */}
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Route path="/about" component={About}></Route>
                <Route path="/home" component={Home}></Route>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
