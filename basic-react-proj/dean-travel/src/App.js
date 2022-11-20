import React from 'react'
import logo from './logo.svg'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  handleAdd = () => {
    // 因为是异步的 调用多次setState只会给count加1 因为state每次都是不变的
    this.setState({ count: this.state.count + 1 })
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div style={{ width: '200px', height: '50px' }}>
            {this.state.count}
          </div>
          <button onClick={this.handleAdd}>Add</button>
        </header>
      </div>
    )
  }
}

export default App
