import React, { Component } from "react"
import axios from 'axios'

export default class App extends Component {

  getData = () => {

  }

  render() {
    return (
      <div>
        <button onClick={this.getData}>Click</button>
      </div>
    )
  }
}