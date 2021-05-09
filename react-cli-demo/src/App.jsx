import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {

  state = { todos: [
    {id: '001', name: '吃饭', done: true},
    {id: '002', name: '睡觉', done: true},
    {id: '003', name: '写代码', done: false}
  ] }

  func = (data) => {
    console.log('receive data from Header Component:', data)
  }

  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header func={this.func}/>
          <List todos={todos} />
          <Footer />
        </div>
      </div>
    )
  }
}
