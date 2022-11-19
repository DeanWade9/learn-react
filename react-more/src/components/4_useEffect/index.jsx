import React, { Component } from 'react'

// 类式组件
// class Demo4 extends Component {
//   state = {
//     count: 1,
//   }

//   add = () => {
//     this.setState((state) => ({ count: state.count + 1 }))
//   }

//   componentDidMount() {
//     setInterval(() => {
//       this.setState((state) => ({ count: this.state.count + 1 }))
//     }, 1000)
//   }

//   render() {
//     return (
//       <div>
//         <h2>Count is: {this.state.count}</h2>
//         <button onClick={this.add}>Add</button>
//       </div>
//     )
//   }
// }

// 函数式组件
function Demo4() {
  console.log('demo4 rendered')
  const [count, setCount] = React.useState(11)
  const [name, setName] = React.useState('dean')

  function add() {
    // 第一种写法
    // setCount(count + 1)
    // 第二种写法
    setCount((count) => count + 1)
  }

  function changeName() {
    setName((name) => name + ' hiroshi')
  }

  React.useEffect(() => {
    setInterval(() => {
      setCount((count) => count + 1)
    }, 1000)
  }, [])

  return (
    <div>
      <h2>Count is: {count}</h2>
      <h2>Name is: {name}</h2>
      <button onClick={add}>Add</button>
      <button onClick={changeName}>changeName</button>
    </div>
  )
}

export default Demo4
