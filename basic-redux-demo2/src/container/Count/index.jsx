import CountUI from '../../components/Count'

import { connect } from 'react-redux'

import { createAddAction, createMinusAction, createAsyncAddAction } from '../../redux/count_actions'

export default connect(
  state => ({ count: state }),
  {
    add: createAddAction,
    minus: createMinusAction,
    addAsync: createAsyncAddAction
  }
  )(CountUI)