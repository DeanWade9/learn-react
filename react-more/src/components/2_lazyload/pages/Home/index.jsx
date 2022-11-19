import React, { Component } from 'react'
import News from './News'
import Message from './Message'
import { Redirect, Route, Switch, Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    console.log('Home props:', this.props)
    return (
      <div>
        <h3>Home</h3>
        <div className="navtab">
          <li>
            <Link to="/home/news">News</Link>
          </li>
          <li>
            <Link to="/home/message">Message</Link>
          </li>
        </div>
        {/* 注册路由 */}
        <Switch>
          <Route path="/home/news" component={News}></Route>
          <Route path="/home/message" component={Message}></Route>
          <Redirect to="/home/news"></Redirect>
        </Switch>
      </div>
    )
  }
}
