import React, { Component } from 'react'
import './index.css'

export default class TopComp extends Component {
  state = {
    name: 'dean',
  }

  render() {
    console.log('comp Top render')
    return (
      <div className="Top">
        <h3>CompTop</h3>
        {/* 内嵌标签体的形式让A和B组件形成父子关系 */}
        {/* <A>
          <B></B>
        </A> */}
        <A render={() => <B />}></A>
      </div>
    )
  }
}

class A extends Component {
  render() {
    console.log('comp A render')
    return (
      <div className="A">
        <h3>Comp A</h3>
        {/* {this.props.children} */}
        {this.props.render()}
      </div>
    )
  }
}

class B extends Component {
  render() {
    console.log('comp B render')
    return (
      <div className="B">
        <h3>Comp B</h3>
      </div>
    )
  }
}
