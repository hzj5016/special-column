import * as actionTypes from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'

export const searchFocus = () => {
  return {
    type: actionTypes.SEARCH_FOCUS
  }
}

export const searchBlur = () => {
  return {
    type: actionTypes.SEARCH_BLUR
  }
}

export const mouseIn = () => {
  return {
    type: actionTypes.MOUSE_IN
  }
}

export const mouseLeave = () => {
  return {
    type: actionTypes.MOUSE_LEAVE
  }
}

export const changePage = () => {
  return {
    type: actionTypes.CHANGE_PAGE
  }
}

export const getSearchList = () => {
  return (dispatch) => {
    axios.get('/api/searchList.json')
      .then((res) => {
        const data = res.data.data
        const action = {
          type: actionTypes.CHANGE_LIST,
          data: fromJS(res.data.data),
          totalPage: Math.ceil(data.length / 8)
        }
        dispatch(action)
      }).catch((e) => {
        console.log(e)
      })
  }
}