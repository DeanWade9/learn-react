import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Home() {
  const [sum, setSum] = React.useState(1)
  return (
    <div>
      <h3>Home</h3>
      {/* <h4>Current Sum: {sum}</h4> */}
      {sum === 2 ? (
        <Navigate to="/about" replace={false} />
      ) : (
        <h4>Current Sum: {sum}</h4>
      )}
      <hr />
      <button onClick={() => setSum(2)}>Change</button>
    </div>
  )
}
