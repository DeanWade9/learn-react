import React, { Component } from 'react'
import store from '../../redux/store'
import {createIncrementAction, createDecrementAction, creaeteAsyncIncrementAction} from '../../redux/count_action'
export default class Count extends Component {

  componentDidMount() {
    store.subscribe(() => {
      this.setState({})
    })
  }
  
  increment = () => {
    const {value} = this.selectValue
    // const {count} = this.state
    // this.setState({
    //   count: count + value * 1
    // })
    // store.dispatch({type: 'increment', data: value*1})
    store.dispatch(createIncrementAction(value*1))
  }
  decrement = () => {
    const {value} = this.selectValue
    // const {count} = this.state
    // this.setState({
    //   count: count - value * 1
    // })
    // store.dispatch({type: 'decrement', data: value*1})
    store.dispatch(createDecrementAction(value*1))
  }
  incrementWhenOdd = () => {
    const {value} = this.selectValue
    // const {count} = this.state
    const count = store.getState()
    if (count % 2 !== 0) {
      // this.setState({
      //   count: count + value * 1
      // })
    // store.dispatch({type: 'increment', data: value*1})
    store.dispatch(createIncrementAction(value*1))
    }
  }
  incrementAsync = () => {
    const {value} = this.selectValue
    // const {count} = this.state
    // setTimeout(() => {
    //   // this.setState({
    //   //   count: count + value * 1
    //   // })
    // // store.dispatch({type: 'increment', data: value*1})
    // store.dispatch(createIncrementAction(value*1))
    // }, 1000)
    store.dispatch(creaeteAsyncIncrementAction(value*1, 1000))
  }

  render() {
    return (
      <div>
        <h1>Currrent Sum: {store.getState()}</h1>
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
