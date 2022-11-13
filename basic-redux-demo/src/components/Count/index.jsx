import React, { Component } from 'react'

export default class Count extends Component {

  state = {
    count: 0
  }
  
  increment = () => {
    const {value} = this.selectValue
    const {count} = this.state
    this.setState({
      count: count + value * 1
    })
  }
  decrement = () => {
    const {value} = this.selectValue
    const {count} = this.state
    this.setState({
      count: count - value * 1
    })
  }
  incrementWhenOdd = () => {
    const {value} = this.selectValue
    const {count} = this.state
    if (count % 2 !== 0) {
      this.setState({
        count: count + value * 1
      })
    }
  }
  incrementAsync = () => {
    const {value} = this.selectValue
    const {count} = this.state
    setTimeout(() => {
      this.setState({
        count: count + value * 1
      })
    }, 1000)
  }

  render() {
    return (
      <div>
        <h1>Currrent Sum: {this.state.count}</h1>
        <select ref={c => this.selectValue = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <br />
        <button onClick={this.increment} style={{marginRight: '10px'}}>+</button>
        <button onClick={this.decrement} style={{marginRight: '10px'}}>-</button>
        <button onClick={this.incrementWhenOdd} style={{marginRight: '10px'}}>add when sum is odd</button>
        <button onClick={this.incrementAsync}>add async</button>
      </div>
    )
  }
}
