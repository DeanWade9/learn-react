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

  // 添加todo对象
  addTodo = (todoObj) => {
    // 获取原todos
    const {todos} = this.state
    // 追加新todo
    const newTodos = [todoObj, ...todos]
    // 更新状态
    this.setState({todos: newTodos})
  }

  // 更新todo对象
  updateTodo = (id, done) => {
    const {todos} = this.state
    const newTodos = todos.map(todo => {
      if (todo.id === id) return {...todo, done}
      else return todo
    })
    this.setState({todos: newTodos})
  }
  // 删除todo对象
  deleteTodo = (id) => {
    const {todos} = this.state
    const newTodos = todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({todos: newTodos})
  }
  // 批量操作todo对象
  checkAllTodos = (done) => {
    const {todos} = this.state
    const newTodos = todos.map(todo => {
      return {...todo, done}
    })
    this.setState({todos: newTodos})
  }

  clearAllDone = () => {
    const {todos} = this.state
    const newTodos = todos.filter(todo => {
      return todo.done === false
    })
    this.setState({todos: newTodos})
  }

  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          <Footer todos={todos} checkAllTodos={this.checkAllTodos} clearAllDone={this.clearAllDone} />
        </div>
      </div>
    )
  }
}
