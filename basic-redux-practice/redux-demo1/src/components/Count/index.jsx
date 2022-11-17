import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createAddAction, createAsyncAddAction, createMinusAction } from '../../redux/actions/count'
class Count extends Component {

  getValue = () => {
    return this.selectValue.value * 1
  }

  handleAdd = () => {
    this.props.addOne(this.getValue())
  }

  handleMinus = () => {
    this.props.minusOne(this.getValue())
  }

  handleAddIfOdd = () => {
    if (this.props.count % 2 !== 0) {
      this.props.addOne(this.getValue())
    }
  }

  handleAddAsync = () => {
    this.props.addOneAsync(this.getValue(), 1000)
  }

  render() {
    console.log('props in Count:', this.props)
    return (
      <div>
        <h2>Total is: {this.props.count}</h2>
        <hr />
        <select style={{width: '90px', height: '30px'}} ref={c => this.selectValue = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <br />
        <br />
        <button style={{width: '50px', height: '30px', marginRight: '20px' }} onClick={this.handleAdd}>+</button>
        <button style={{width: '50px', height: '30px', marginRight: '20px' }} onClick={this.handleMinus}>-</button>
        <button style={{width: '100px', height: '30px', marginRight: '20px' }} onClick={this.handleAddIfOdd}>add If Odd</button>
        <button style={{width: '100px', height: '30px'}} onClick={this.handleAddAsync}>add Async</button>
      </div>
    )
  }
}

export default connect(
  state => ({ count: state }),
  {
    addOne: createAddAction,
    minusOne: createMinusAction,
    addOneAsync: createAsyncAddAction
  }
)(Count)