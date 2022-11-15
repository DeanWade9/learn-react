import { INCREMENT, DECREMENT } from './constant'

// this file generates action object for component Count
export const createIncrementAction = (data) => ({ type: INCREMENT, data })
export const createDecrementAction = (data) => ({ type: DECREMENT, data })
