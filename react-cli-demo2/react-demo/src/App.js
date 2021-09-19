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

  render(){
    const {todos} = this.state
    return(
      <div className="todo-container">
        <Header />
        <List todos={todos} />
        <Footer />
      </div>
    )
  }
}