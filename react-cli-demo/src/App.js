import React from 'react'
import Hello from './components/Hello'
import Welcome from './components/Welcome'
const { Component } = React

// 创建外壳组件
class App extends Component {
  render () {
    return (
      <div>
        <Hello />
        <Welcome />
      </div>
    )
  }
}
// 暴露App组件
export default App