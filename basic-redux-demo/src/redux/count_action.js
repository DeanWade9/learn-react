import { INCREMENT, DECREMENT } from './constant'
import store from './store'

// this file generates action object for component Count
export const createIncrementAction = (data) => ({ type: INCREMENT, data })
export const createDecrementAction = (data) => ({ type: DECREMENT, data })

// async action 异步aciton 指的就是action的值为函数
export const creaeteAsyncIncrementAction = (data, delay) => {
  return () => {
    setTimeout(() => {
      store.dispatch(createIncrementAction(data))
    }, delay)
  }
}
