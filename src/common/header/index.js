import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {actionCreators} from './store/';
import {actionCreators as loginActionCreators} from '../../pages/login/store'
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
} from './style';

class Header extends Component {
    getListArea() {
        const {
            searchFocus,
            mouseIn,
            list,
            page,
            totalPage,
            handleMouseEnter,
            handleMouseLeave,
            handleChangePage
        } = this.props;
        for (let i = (page - 1) * 10; i < page * 10; i++) {

        }
        if (searchFocus || mouseIn) {
            return (
                <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage)}>
                            <i className="iconfont icon-spin"/> 换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <div>
                        {
                            list.map((item, index) => {
                                if (index >= (page - 1) * 10 && index < page * 10) {
                                    return (
                                        <SearchInfoItem key={item}>{item}</SearchInfoItem>
                                    )
                                } else {
                                    return null;
                                }
                            })
                        }
                    </div>
                </SearchInfo>
            );
        } else {
            return null;
        }
    }

    render() {
        const {login, list, searchFocus, mouseIn, handleInputBlur, handleInputFocus, handleLogout} = this.props;
        return (
            <HeaderWrapper>
                <Link to="/">
                    <Logo/>
                </Link>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    {
                        login
                            ? <NavItem className="right" onClick={handleLogout}>退出</NavItem>
                            : <Link to="/login">
                                <NavItem className="right">登陆</NavItem>
                            </Link>
                    }
                    <NavItem className="right">
                        <i className="iconfont">&#xe6b1;</i>
                    </NavItem>
                    <SearchWrapper>
                        <NavSearch
                            className={searchFocus || mouseIn ? "is-focus" : ""}
                            onFocus={() => handleInputFocus(list)}
                            onBlur={handleInputBlur}
                        />
                        <i className="iconfont icon-fangdajing"/>
                        {this.getListArea()}
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
        searchFocus: state.get("header").get("searchFocus"),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        totalPage: state.getIn(['header', 'totalPage']),
        login: state.getIn(['login', 'login'])
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },
        handleInputFocus(list) {
            if (!list.size) {
                dispatch(actionCreators.getList());
            }
            dispatch(actionCreators.searchFocus());
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage) {
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1));
            } else {
                dispatch(actionCreators.changePage(1));
            }
        },
        handleLogout() {
            dispatch(loginActionCreators.logout())
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
