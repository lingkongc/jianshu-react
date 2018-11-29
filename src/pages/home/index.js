import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
import {actionCreators} from './store';
import {
    HomeWrapper,
    HomeMain,
    HomeSide,
    BackTop
} from './style'


class Home extends PureComponent {
    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }

    handleScrollTop() {
        window.scrollTo(0, 0);
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }

    render() {
        const {showScroll} = this.props;
        return (
            <div>
                <HomeWrapper>
                    <HomeMain>
                        <img
                            src="//upload.jianshu.io/admin_banners/web_images/4582/2db83cc6f08d13c2f83002238ca32b784266c4fb.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                            alt="540"/>
                        <Topic/>
                        <List/>
                    </HomeMain>
                    <HomeSide>
                        <Recommend/>
                        <Writer/>
                    </HomeSide>
                    {
                        showScroll
                            ? <BackTop onClick={this.handleScrollTop}>✡</BackTop>
                            : null
                    }
                </HomeWrapper>
            </div>
        )
    }
}

const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})
const mapDispatch = (dispatch) => ({
    changeHomeData() {
        const action = actionCreators.getHomeInfo();
        dispatch(action);
    },
    changeScrollTopShow(e) {
        if (document.documentElement.scrollTop > 300) {
            const action = actionCreators.toggleTopShow(true);
            dispatch(action);
        } else {
            const action = actionCreators.toggleTopShow(false);
            dispatch(action);
        }
    }
});
export default connect(mapState, mapDispatch)(Home);