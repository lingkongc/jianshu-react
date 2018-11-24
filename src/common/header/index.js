import React, { Component } from "react";
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

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFocused: false
    };

    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
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
              className={this.state.searchFocused ? "is-focus" : ""}
              onFocus={this.handleInputFocus}
              onBlur={this.handleInputBlur}
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
  }

  handleInputFocus(e) {
    this.setState({
      searchFocused: true
    })
  }

  handleInputBlur(e) {
    this.setState({
      searchFocused: false
    })
  }


}

export default Header;