import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

  getStudentData = () => {
    axios.get('http://localhost:3000/students').then(
      response => {console.log('success,data:', response.data)},
      error => {console.log('success,data:', error.error)}
    )
  }

  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点我获取学生数据</button>
      </div>
    )
  }
}
