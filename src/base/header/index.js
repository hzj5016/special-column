import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'
import {
  HeaderWrap,
  Logo,
  Nav,
  NavItem,
  NavSearchWrap,
  NavSearch,
  SearchInfo,
  SearchTitle,
  SearchSwap,
  SearchItem,
  UserandWritter,
  User,
  Button,
} from './style'

// 显示热门搜索
function isShowList(props) {
  const { focused, list, page, mouseIn, mouseEnter, mouseLeave, changePage } = props
  // 把 immutable 数组转化为普通 js 数组
  const jsList = list.toJS()
  const showList = []
  if (jsList.length) {
    for (let i = (page - 1) * 8; i < page * 8; i++) {
      if (i < jsList.length) {
        let v = jsList[i]
        showList.push(
          <SearchItem key={v}>{v}</SearchItem>
        )
      } else {
        break
      }
    }
  }
  if (focused || mouseIn) {
    return (
      <SearchInfo onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
        <SearchTitle>
          热门搜索
          <SearchSwap onClick={changePage}>换一换</SearchSwap>
        </SearchTitle>
        <div>
          {showList}
        </div>
      </SearchInfo>
    )
  } else {
    return null
  }
}

function Header(props) {
  return (
    <HeaderWrap>
      <Logo />
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>发现</NavItem>
        <NavItem className='right'>消息</NavItem>
        <NavItem className='right'>登录</NavItem>
        <NavSearchWrap>
          <NavSearch
            className={props.focused ? 'focused' : ''}
            onFocus={props.inputFocus}
            onBlur={props.inputBlur}
          />
          <i className={props.focused ? 'iconfont focused' : 'iconfont'}>&#xe600;</i>
          {isShowList(props)}
        </NavSearchWrap>
      </Nav>
      <UserandWritter>
        <User />
        <Button>写文章</Button>
      </UserandWritter>
    </HeaderWrap>
  )
}

const mapStateToProps = (state) => {
  return {
    // 拆分 reducer
    focused: state.homeHeader.get('focused'),
    list: state.homeHeader.get('list'),
    page: state.homeHeader.get('page'),
    mouseIn: state.homeHeader.get('mouseIn')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    inputFocus() {
      dispatch(actionCreators.getSearchList())
      dispatch(actionCreators.searchFocus())
    },
    inputBlur() {
      const action = actionCreators.searchBlur()
      dispatch(action)
    },
    mouseEnter() {
      const action = actionCreators.mouseIn()
      dispatch(action)
    },
    mouseLeave() {
      const action = actionCreators.mouseLeave()
      dispatch(action)
    },
    changePage() {
      const action = actionCreators.changePage()
      dispatch(action)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

