import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <a href="https://github.com/reactjs" target="_blank" rel="noreferrer">
            <img alt="" src="https://x0.ifengimg.com/res/2020/5A4F3225ED35336CAE281BBCAB2A9F16F1B793A7_size137_w1080_h1620.jpeg" style={{width: '100px'}}/>
          </a>
          <p className="card-text">reactjs</p>
        </div>
      </div>
    )
  }
}
