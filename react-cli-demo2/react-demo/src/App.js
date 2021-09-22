import React, { Component } from 'react'
import './app.css'

export default class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="title">React Router Demo</div>
        <div className="wrapper">
          <div className="nav">
            <a className="nav-item">About</a>
            <a className="nav-item">Home</a>
          </div>
          <div className="show">
            show
          </div>
        </div>
      </div>
    )
  }
}
