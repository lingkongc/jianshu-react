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
  margin: 0 auto;
  max-width: 960px;
  height: 100%;
`;

export const NavItem = styled.div`
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

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  margin: 10px 0 0 20px;
  padding: 0 36px 0 20px;
  height: 36px;
  background: #eeeeee;
  border-radius: 18px;
  .icon-fangdajing {
    position: absolute;
    top: 5px;
    right: 5px;
    color: #999999;
    padding: 5px;
    border-radius: 50%;
  }
`;

export const NavSearch = styled.input.attrs({
    placeholder: "搜索"
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
  &.is-focus {
    max-width: 200px;
    & + .iconfont {
      color: #ffffff;
      background-color: #999999;
    }
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
  cursor: pointer;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  background: #ffffff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  &:before {
    position: relative;
    display: block;
    content: "";
    top: -5px;
    width: 10px;
    height: 10px;
    background: #ffffff;
    transform: rotate(45deg);
    border-right-color: transparent;
    border-bottom-color: transparent;
  }
`;

export const SearchInfoTitle = styled.div`
  margin: 20px 0 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;

export const SearchInfoSwitch = styled.div`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .icon-spin{
    font-size: 12px;
    transition: all 0.5s ease;
  }
  &:hover{
    color: #686868;
  }
`;

export const SearchInfoItem = styled.a`
  display: inline-block;
  margin: 0 10px 15px 0;
  line-height: 20px;
  padding: 0 5px;
  font-size: 12px;
  border: 1px solid #dddddd;
  color: #787878;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover{
    color: #585858
    border: 1px solid #aaaaaa;
  }
`;