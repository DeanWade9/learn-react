/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import './App.css'
import List from './components/List'
import Search from './components/Search'
export default class App extends Component {
  state = {
    users: []
  }

  saveUsers = (users) => {
    this.setState({users})
  }

  render() {
    const { users } = this.state
    return (
      <div>
        <div className="container">
          <Search saveUsers={this.saveUsers} />
          <List users={users} />
        </div>
      </div>
    )
  }
}
