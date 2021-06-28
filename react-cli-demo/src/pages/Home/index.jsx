import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    console.log('Home接收的props:', this.props);
    return (
      <div>
        <h3>我是Home的内容</h3>
      </div>
    )
  }
}
