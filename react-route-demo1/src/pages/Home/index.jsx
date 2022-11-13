import React, { Component } from 'react'
import News from './News'
import Message from './Message'
import MyNavLink from '../../components/MyNavLink'
import { Redirect, Route, Switch } from 'react-router'

export default class Home extends Component {
  render() {
    console.log('Home props:', this.props)
    return (
      <div>
        <h3>Home</h3>
        <div className="navtab">
          <li>
            <MyNavLink to="/home/news">News</MyNavLink>
          </li>
          <li>
          <MyNavLink to="/home/message">Message</MyNavLink>
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
