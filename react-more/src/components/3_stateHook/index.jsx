import React, { Component } from 'react'

// 类式组件
// class Demo3 extends Component {
//   state = {
//     count: 1
//   }

//   add = () => {
//     this.setState((state) => ({count: state.count + 1}))
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
function Demo3() {
  console.log('demo3 rendered')
  const [count, setCount] = React.useState(11)

  function add() {
    // 第一种写法
    // setCount(count + 1)
    // 第二种写法
    setCount((count) => count + 1)
  }
  return (
    <div>
      <h2>Count is: {count}</h2>
      <button onClick={add}>Add</button>
    </div>
  )
}

export default Demo3
