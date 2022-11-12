import React, { Component } from 'react'
import {Link, NavLink, Redirect, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className="demo">
        <Header />
        <div className="board">
          <div className="left">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/home">Home</NavLink>
          </div>
          <div className="right">
            <div className="show-area">
              <Route path="/about" component={About}></Route>
              <Route path="/home" component={Home}></Route>
              <Redirect to="/home" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
