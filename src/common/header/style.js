import styled from "styled-components";

import logoPic from "../../statics/logo.png";

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a`
  position: absolute;
  top: 0;
  left: 0;

  dispaly: block;

  height: 56px;
  width: 100px;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  margin: 0 240px 0 240px;
  max-width: 100%;
  height: 100%;
  ${"" /* margin: 0 auto; */}
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  color: #333;
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

export const NavSearch = styled.input`
  box-sizing: border-box;
  margin: 10px 0 0 20px;
  padding: 0 20px;
  max-width: 200px;
  height: 36px;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eeeeee;

  font-size: 14px;
  &::placeholder {
    color: #999999;
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  background: 56px;
`;

export const Button = styled.div`
  float: right;
  margin: 10px 10px 0;
  padding: 0 20px;
  line-height: 36px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`;