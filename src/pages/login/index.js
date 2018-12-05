import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {LoginWrapper, Header, LoginBox, Input, Button} from "./style";
import {actionCreators} from './store';
import logo from '../../statics/logo.png'


class Login extends PureComponent {
    render() {
        const {login, handleLogin} = this.props;
        if (!login) {
            return (
                <div>
                    <Header>
                        <Link to="/">
                            <img src={logo} alt="xxx"/>
                        </Link>
                    </Header>
                    <LoginWrapper>
                        <LoginBox>
                            <Input placeholder="账号" ref={(input) => {
                                this.account = input
                            }}/>
                            <Input placeholder="密码" type="password" ref={(input) => {
                                this.password = input
                            }}/>
                            <Button onClick={() => handleLogin(this.account, this.password)}>登录</Button>
                        </LoginBox>
                    </LoginWrapper>
                </div>
            )
        } else {
            // 重定向
            return <Redirect to="/"/>
        }
    }

    componentDidMount() {

    }
}

const mapState = (state) => ({
    login: state.getIn(['login', 'login'])
});

const mapDispatch = (dispatch) => ({
    handleLogin(accountElem, passwordElem) {
        console.log(accountElem.value, passwordElem.value);
        const action = actionCreators.handleLogin(accountElem.value, passwordElem.value);
        dispatch(action);
    }
})

export default connect(mapState, mapDispatch)(Login);