import React from 'react'
<<<<<<< HEAD:react-cli-demo/src/App.js
import Hello from './components/Hello'
import Welcome from './components/Welcome'
=======
import Hello from './components/Hello/Hello'
import Welcome from './components/Welcome/Welcome'
>>>>>>> df5407dfb73dca9af2f4c03054d9662da562c83d:react-cli-demo/src_hello_react/App.js
const { Component } = React

// 创建外壳组件
export default class App extends Component {
  render () {
    return (
      <div>
        <Hello />
        <Welcome />
      </div>
    )
  }
}