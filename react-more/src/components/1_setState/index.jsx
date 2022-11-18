import React, { Component } from 'react'

export default class Demo1 extends Component {
  state = {
    count: 0
  }

  /**
   * 状态式的 setState
   */
  add = () => {
    const { count } = this.state
    this.setState({ count: count + 1 })
    // 打印不到最新的state 因为state是异步更新的
    console.log(this.state.count)
  }

  // add = () => {
  //   const { count } = this.state
  // 通过setState第二个参数 传入一个回调函数可以在函数里获取到更新后的state
  //   this.setState({ count: count + 1 }, () => {
  //     console.log(this.state.count)
  //   })
  // }

  /**
   * 函数式的 setState
   */
  add2 = () => {
    this.setState((state, props) => {
      console.log(state, props)
      return { count: state.count + 1 }
    })
  }


  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.add}>Add触发状态式setState</button>
        <hr />
        <button onClick={this.add2}>Add触发函数式setState</button>
      </div>
    )
  }
}
