import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Header from '../../common/header';
import {Redirect} from 'react-router-dom';


class Write extends PureComponent {
    render() {
        const {login} = this.props;
        console.log(login);
        if (login) {
            return (
                <div>
                    <Header/>
                    <div>
                        写文章
                    </div>
                </div>
            )
        } else {
            // 重定向
            return <Redirect to="/login"/>
        }
    }

    componentDidMount() {

    }
}

const mapState = (state) => ({
    login: state.getIn(['login', 'login'])
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(Write);