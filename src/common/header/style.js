import styled from "styled-components";

import logoPic from "../../statics/logo.png";

export const HeaderWrapper = styled.div `
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  overflow: hidden;
`;

export const Logo = styled.a `
  position: absolute;
  top: 0;
  left: 0;

  dispaly: block;

  height: 56px;
  width: 100px;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div `
  margin: 0 240px 0 240px;
  max-width: 100%;
  height: 100%;
  ${"" /* margin: 0 auto; */}
`;

export const NavItem = styled.div `
  line-height: 56px;
  padding: 0 15px;
  color: #333;
  cursor: pointer;
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
`;

export const SearchWrapper = styled.div `
  position: relative;
  float: left;
  margin: 10px 0 0 20px;
  padding: 0 36px 0 20px;
  height: 36px;
  overflow: hidden;
  background: #eeeeee;
  border-radius: 18px;
  .iconfont {
    position: absolute;
    top: 5px;
    right: 5px;
    color: #999999;
    padding: 5px;
    border-radius: 50%;
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  box-sizing: border-box;
  max-width: 100px;
  height: 100%;
  border: none;
  outline: none;
  background-color: inherit;
  color: #777777;
  font-size: 14px;
  transition: all 0.5s ease-in-out;
  &::placeholder {
    color: #999999;
  }
  &.is-focus{
    max-width: 200px;
    & + .iconfont{
      color: #ffffff;
      background-color: #999999;
    }
  }
`;

export const Addition = styled.div `
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  background: 56px;
`;

export const Button = styled.div `
  float: right;
  margin: 10px 10px 0;
  padding: 0 20px;
  line-height: 36px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  cursor: pointer;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`;