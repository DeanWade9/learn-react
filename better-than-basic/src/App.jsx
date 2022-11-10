/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import './App.css'
import List from './components/List'
import Search from './components/Search'
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Search />
          <List />
        </div>
      </div>
    )
  }
}
