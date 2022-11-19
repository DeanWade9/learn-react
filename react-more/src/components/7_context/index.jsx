import React, { Component } from 'react'
import './index.css'

// 在公共区域创建context上下文对象
const MyContext = React.createContext()
const { Provider, Consumer } = MyContext

export default class A extends Component {
  state = {
    username: 'Dean',
    age: 30,
  }
  render() {
    const { username, age } = this.state
    return (
      <div className="A">
        <h3>Component A</h3>
        <h3>Username: {username}</h3>
        <hr />
        {/* 这样包裹B组件 B组件和B组件的所有子组件都能收到username的数据了 */}
        <Provider value={{ username, age }}>
          <B />
        </Provider>
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div className="B">
        <h3>Component B</h3>
        <h3>Username rcv from CompA: </h3>
        <hr />
        <C></C>
      </div>
    )
  }
}

// class C extends Component {
//   static contextType = MyContext
//   render() {
//     console.log('this in CompC:', this)
//     return (
//       <div className="C">
//         <h3>Component C</h3>
//         <h3>Username rcv from CompA:{this.context.username}</h3>
//       </div>
//     )
//   }
// }

// 函数式组件 没有static 没有this
function C() {
  return (
    <div className="C">
      <h3>Component C</h3>
      {/* <h3>Username rcv from CompA:{this.context.username}</h3> */}
      <Consumer>
        {(value) => {
          console.log(value)
          return (
            <h3>
              Username rcv from CompA:
              {`username: ${value.username} age: ${value.age}`}
            </h3>
          )
        }}
      </Consumer>
    </div>
  )
}
