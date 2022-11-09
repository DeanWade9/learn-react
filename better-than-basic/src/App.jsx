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

  addTask = (taskObj) => {
    const { todoList } = this.state
    const newList = [taskObj, ...todoList]
    this.setState({
      todoList: newList
    })
  }

  // 修改todolist 勾选状态 done的值
  updateTaskStatus = (id, status) => {
    const newList = this.state.todoList.map(t => {
      if (t.id == id) {
        return {...t, done: status}
      } else {
        return t
      }
    })
    console.log('newList:', newList)
    this.setState({
      todoList: newList
    })
  }

  render() {
    const { todoList } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTask={this.addTask} />
          <List todoList={todoList} updateTaskStatus={this.updateTaskStatus} />
          <Footer />
        </div>
      </div>
    )
  }
}
