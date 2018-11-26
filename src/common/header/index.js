import React from "react";
import { connect } from 'react-redux';
import { actionCreators } from './store/';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button
} from "./style";

const Header = (props) => (
  <HeaderWrapper>
    <Logo href="/" />
    <Nav>
      <NavItem className="left active">首页</NavItem>
      <NavItem className="left">下载App</NavItem>
      <NavItem className="right">登陆</NavItem>
      <NavItem className="right">
        <i className="iconfont">&#xe6b1;</i>
      </NavItem>
      <SearchWrapper>
        <NavSearch
          className={props.searchFocus ? "is-focus" : ""}
          onFocus={props.handleInputFocus}
          onBlur={props.handleInputBlur}
        />
        <i className="iconfont icon-fangdajing"></i>
      </SearchWrapper>

    </Nav>
    <Addition>
      <Button className="writting iconfont">&#xe645; 写文章</Button>
      <Button className="reg">注册</Button>
    </Addition>
  </HeaderWrapper>
);


const mapStateToProps = (state) => {
  return {
    searchFocus: state.get('header').get('searchFocus')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputBlur() {
      const action = actionCreators.searchBlur();
      dispatch(action);
    },
    handleInputFocus() {
      const action = actionCreators.searchFocus();
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);