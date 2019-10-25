import React, { Fragment } from 'react'
import store from './store/store'
import { Provider } from 'react-redux'
import GlobalStyle from './reset'
import GlobalIcon from './static/icon/iconfont'
import Header from './base/header'

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <GlobalStyle />
        <GlobalIcon />
        <Header />
      </Fragment>
    </Provider>
  )
}

export default App