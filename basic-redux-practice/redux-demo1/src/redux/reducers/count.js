import { ADD, MINUS } from '../constants'

const initValue = 0
export default function countReducer(preState = initValue, action) {
  const { type, data } = action
  switch (type) {
    case ADD:
      return (preState += data)
    case MINUS:
      return (preState -= data)
    default:
      return preState
  }
}
