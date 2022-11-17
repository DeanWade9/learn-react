import { createStore, applyMiddleware } from 'redux'
import countReducer from './reducers/count'
// 让action支持返回函数
import thunk from 'redux-thunk'

export default createStore(countReducer, applyMiddleware(thunk))
