import React, { Component } from "react"

import Header from "./components/Header"
import Footer from "./components/Footer"
import List from "./components/List"

export default class App extends Component {

  state = { todos: [
    { id: '001', msg: 'Sleep', done: true },
    { id: '002', msg: 'Eat', done: false },
    { id: '003', msg: 'Code', done: false }
  ] }

  addTodo = (todoObj) => {
    const {todos} = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({todos: newTodos})
  }

  changeTodo = (id) => {
    const {todos} = this.state
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {...todo, done: !todo.done}
      } else {
        return {...todo}
      }
    })

    this.setState({todos: newTodos})
  }

  deleteTodo = (id) => {
    const {todos} = this.state
    const newTodos = todos.filter(todo => todo.id !== id)
    console.log(newTodos)
    this.setState({todos: newTodos})
  }

  checkAll = (flag) => {
    const {todos} = this.state
    const newTodos = todos.map(todo => {
      todo.done = flag
      return todo
    })
    this.setState({todos: newTodos})
  }

  clearAllDone = () => {
    const {todos} = this.state
    const newTodos = todos.filter(todo => {
      if (!todo.done) {
        return todo
      }
    })
    this.setState({todos: newTodos})
    // console.log(newTodos)
  }

  render(){
    const {todos} = this.state
    return(
      <div className="todo-container">
        <Header addTodo={this.addTodo} />
        <List todos={todos} changeTodo={this.changeTodo} deleteTodo={this.deleteTodo} />
        <Footer todos={todos} checkAll={this.checkAll} clearAllDone={this.clearAllDone} />
      </div>
    )
  }
}