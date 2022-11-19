import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import root from '../../main'

// 类式组件
// class Demo5 extends Component {
//   state = {
//     count: 1,
//   }

//   inputRef = React.createRef()

//   add = () => {
//     this.setState((state) => ({ count: state.count + 1 }))
//   }

//   unmount = () => {
//     // 高版本react不能这样写了
//     // ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//     root.unmount()
//   }

//   getValue = () => {
//     console.log(this.inputRef.current.value)
//   }

//   componentDidMount() {
//     this.timer = setInterval(() => {
//       this.setState((state) => ({ count: this.state.count + 1 }))
//     }, 1000)
//   }

//   componentWillUnmount() {
//     clearInterval(this.timer)
//   }

//   render() {
//     return (
//       <div>
//         <h2>Count is: {this.state.count}</h2>
//         <button onClick={this.add}>Add</button>
//         <button onClick={this.unmount}>unMount</button>
//         <hr />
//         <input type="text" ref={this.inputRef} />
//         <button onClick={this.getValue}>getValue</button>
//       </div>
//     )
//   }
// }

// 函数式组件
function Demo5() {
  console.log('demo5 rendered')
  const [count, setCount] = React.useState(11)
  const [name, setName] = React.useState('dean')

  const inputRef = React.useRef()

  function add() {
    // 第一种写法
    // setCount(count + 1)
    // 第二种写法
    setCount((count) => count + 1)
  }

  function changeName() {
    setName((name) => name + ' hiroshi')
  }

  function unmount() {
    // ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    root.unmount()
  }

  function getValue() {
    console.log(inputRef.current.value)
  }

  React.useEffect(() => {
    let timer = setInterval(() => {
      setCount((count) => count + 1)
    }, 1000)

    return () => {
      console.log('consider this a componentWillUnmount hook')
      clearInterval(timer)
    }
  }, [])

  return (
    <div>
      <h2>Count is: {count}</h2>
      <h2>Name is: {name}</h2>
      <button onClick={add}>Add</button>
      <button onClick={changeName}>changeName</button>
      <button onClick={unmount}>unMount</button>
      <hr />
      <input type="text" ref={inputRef} />
      <button onClick={getValue}>getValue</button>
    </div>
  )
}

export default Demo5
