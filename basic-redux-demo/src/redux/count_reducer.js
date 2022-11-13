export default function countReducer(preState, action) {
  console.log(preState, action)
  const { type, data } = action
  switch (type) {
    case 'increment':
      return (preState += data)
    case 'decrement':
      return (preState -= data)
    default:
      return 0
  }
}
