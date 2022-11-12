import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    console.log('header props:', this.props)
    return (
      <div className="title">React Router Demo</div>
    )
  }
}
