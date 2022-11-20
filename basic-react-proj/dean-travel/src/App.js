import React from 'react'
import './App.css'
import Demo1 from './components/useEffect-demo'

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

  // 通过回调的形式 可以获取到上一次的(最新的)state 然后可以在第二个回调方法中获取最新的state
  // 这样点击一次按钮就可以给state加2了
  handleAdd2 = () => {
    this.setState(
      (preState, preProps) => ({ count: preState.count + 1 }),
      () => console.log(this.state)
    )
    this.setState(
      (preState, preProps) => ({ count: preState.count + 1 }),
      () => console.log(this.state)
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div style={{ width: '200px', height: '50px' }}>
            {this.state.count}
          </div>
          <button onClick={this.handleAdd2}>Add</button>
          <Demo1></Demo1>
        </header>
      </div>
    )
  }
}

export default App
