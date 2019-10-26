import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  mouseIn: false,
  focused: false,
  list: [],
  page: 1,
  totalPage: 0
})

const reducer = (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    return state.set('focused', true)
  }
  if (action.type === actionTypes.SEARCH_BLUR) {
    return state.set('focused', false)
  }
  if(action.type === actionTypes.CHANGE_LIST) {
    return state.merge({
      list: action.data,
      totalPage: action.totalPage
    })
  }
  if(action.type === actionTypes.MOUSE_IN) {
    return state.set('mouseIn', true)
  }
  if(action.type === actionTypes.MOUSE_LEAVE) {
    return state.set('mouseIn', false)
  }
  if(action.type === actionTypes.CHANGE_PAGE) {
    let page = state.get('page') + 1
    if(page > state.get('totalPage')) {
      page = 1
    }
    return state.set('page', page)
  }
  return state
}

export default reducer