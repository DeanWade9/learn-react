import { ADD, MINUS } from '../constants'

export const createAddAction = (data) => ({ type: ADD, data })
export const createMinusAction = (data) => ({ type: MINUS, data })
export const createAsyncAddAction = (data, delay) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createAddAction(data))
    }, delay)
  }
}
