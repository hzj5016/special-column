import React from 'react'
import { connect } from 'react-redux'
import {
  HeaderWrap,
  Logo,
  Nav,
  NavItem,
  NavSearchWrap,
  NavSearch,
  UserandWritter,
  User,
  Button,
} from './style'

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
    focused: state.homeHeader.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    inputFocus() {
      const action = {
        type: 'search_focus'
      }
      dispatch(action)
    },
    inputBlur() {
      const action = {
        type: 'search_blur'
      }
      dispatch(action)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

