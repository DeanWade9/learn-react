export const createAddAction = (data) => ({ type: 'add', data })
export const createMinusAction = (data) => ({ type: 'minus', data })

// 异步
export const createAsyncAddAction = (data, delay) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createAddAction(data))
    }, delay)
  }
}
