const defaultState = {
  focused: false
}

const reducer = (state = defaultState, action) => {
  if(action.type === 'search_focus') {
    return {
      focused: true
    }
  }
  if(action.type === 'search_blur') {
    return {
      focused: false
    }
  }
  return state
}

export default reducer