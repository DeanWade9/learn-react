import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
  state = {
    todoList: [
      {taskName: 'a1', id: '001', done: false},
      {taskName: 'a2', id: '002', done: true}
    ]
  }
  render() {
    const { todoList } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header />
          <List todoList={todoList} />
          <Footer />
        </div>
      </div>
    )
  }
}
