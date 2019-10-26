import styled from 'styled-components'
import logoPic from '../../static/logo.png'
import userPic from '../../static/user.png'

export const HeaderWrap = styled.div `
  position: relative;
  height: 60px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #ccc;
`

export const Logo = styled.a.attrs({
  href: '/'
}) `
  display: block;
  position: absolute;
  top: 0;
  left: 10px;
  width: 100px;
  height: 60px;
  background: url(${logoPic});
  background-size: contain;
`

export const Nav = styled.div `
  width: 960px;
  height: 60px;
  margin: 0 auto;
`

export const NavItem = styled.a.attrs({
  href: '#'
}) `
  display: block;
  line-height: 60px;
  width: 90px;
  padding: 0 15px;
  color: #333;
  font-family: Helvetica;
  font-size: 18px;
  text-decoration: none;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`

export const NavSearchWrap = styled.div `
  position: relative;
  float: left;
  .iconfont {
    position: absolute;
    right: 5px;
    top: 15px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    color: #888;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
}) `
  color: #666;
  width: 200px;
  transition: width .5s;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 20px;
  background: #eee;
  margin-top: 10px;
  padding-left: 20px;
  padding-right: 35px;
  font-size: 14px;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 320px;
    transition: width .5s easy-out;
  }
`

export const SearchInfo = styled.div `
  position: absolute;
  top: 60px;
  left: 0;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  border: 1px solid transparent;
  border-radius: 5px;
`

export const SearchTitle = styled.div `
  margin-top: 20px;
  margin-bottom: 15px;
  color: #969696;
  font-size: 14px;
  line-height: 14px;
`

export const SearchSwap = styled.div `
  &:hover {
    color: #ea6f5a;
  }
  cursor: pointer;
  float: right;
  font-size: 13px;
`

export const SearchItem = styled.a `
  border: 1px solid #ddd;
  font-size: 12px;
  line-height: 20px;
  padding: 0 5px;
  color: #777;
  border-radius: 3px;
  display: block;
  float: left;
  margin-right: 10px;
  margin-bottom: 12px;
`

export const UserandWritter = styled.div `
  position: absolute;
  top: 0;
  right: 0;
  width: 250px;
  height: 100%;
  margin-right: 10px;
`

export const User = styled.a `
  display: inline-block;
  margin-top: 10px;
  margin-left: 50px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: url(${userPic});
  background-size: contain;
`
export const Button = styled.div `
  line-height: 40px;
  border-radius: 20px;
  float: right;
  margin-top: 10px;
  margin-right: 30px;
  background-color: #ea6f5a;
  padding: 0 20px;
  color: #fff;
  font-size: 16px;
`