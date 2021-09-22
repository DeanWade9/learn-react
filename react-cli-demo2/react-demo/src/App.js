import React, { Component } from 'react'
import { Link, BrowserRouter, Route } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import './app.css'

export default class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="title">React Router Demo</div>
        <BrowserRouter>
          <div className="wrapper">
            <div className="nav">
              <Link className="nav-item" to="/about">About</Link>
              <Link className="nav-item" to="/home">Home</Link>
            </div>
            <div className="show">
              {/* 注册路由 */}
              <Route path="/about" component={About} />
              <Route path="/home" component={Home} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
