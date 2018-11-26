import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store/";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem
} from "./style";

class Header extends Component {
  getListArea(show) {
    if (show) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <div>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
          </div>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
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
              className={this.props.searchFocus ? "is-focus" : ""}
              onFocus={this.props.handleInputFocus}
              onBlur={this.props.handleInputBlur}
            />
            <i className="iconfont icon-fangdajing" />
            {this.getListArea(this.props.searchFocus)}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting iconfont">&#xe645; 写文章</Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchFocus: state.get("header").get("searchFocus")
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputBlur() {
      const action = actionCreators.searchBlur();
      dispatch(action);
    },
    handleInputFocus() {
      const action = actionCreators.searchFocus();
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
