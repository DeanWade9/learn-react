import React, { useEffect, useState } from 'react'
import { BsCartCheckFill } from 'react-icons/bs'

export default function Demo1() {
  const [count, setCount] = useState(0)
  const [robotGallery, setRobotGallery] = useState([])

  useEffect(() => {
    // console.log('triger useEffect')
    document.title = `Clicked ${count} times`
  }, [count])

  // useEffect第二个参数传入空数组 用来模拟ComponentDidMount钩子(只在组件挂载时候执行一次)
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((res) => res.json())
  //     .then((data) => setRobotGallery(data))
  // }, [])

  // useEffect不传入 第二个参数 用来模拟ComponentDidUpdate
  useEffect(() => {
    console.log('useEffect')
  })

  // 如何在useEffect中使用async和await
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json()
      setRobotGallery(data)
    }

    fetchData()
  }, [])

  return (
    <div>
      <div
        style={{
          width: '300px',
          height: '50px',
          background: '#ffcc00',
          lineHeight: '50px',
        }}
      >
        <BsCartCheckFill />
        <span>Demo1 Count: </span>
        <span style={{ color: '#111' }}>{count}</span>
      </div>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
      <hr />
      <div>
        {robotGallery.map((r) => (
          <section key={r.id}>
            <span>id: {r.id}</span>
            <span>email: {r.email}</span>
            <span>name: {r.name}</span>
          </section>
        ))}
      </div>
    </div>
  )
}
