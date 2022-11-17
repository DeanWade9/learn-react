import CountUI from '../../components/Count'

import { connect } from 'react-redux'

import { createAddAction, createMinusAction, createAsyncAddAction } from '../../redux/count_actions'

const mapStateToProps = (state) => {
  return {
    count: state
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: (data) => dispatch(createAddAction(data)),
  minus: (data) => dispatch(createMinusAction(data)),
  addAsync: (data, delay) => dispatch(createAsyncAddAction(data, delay))
})

export default connect(mapStateToProps, mapDispatchToProps)(CountUI)