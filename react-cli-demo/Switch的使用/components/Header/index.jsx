import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    // console.log('header接收的props:', this.props);
    return (
      <div>
        <div className="page-header"><h2>React Router Demo</h2></div>
      </div>
    )
  }
}
