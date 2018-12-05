import React, {Component} from 'react';
import Header from '../../common/header';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {actionCreators} from './store';
import {DetailWrapper, Header as DetailHeader, Content} from "./style";


class Detail extends Component {
    render() {
        const {title, content} = this.props;
        return (
            <div>
                <Header/>
                <DetailWrapper>
                    <DetailHeader>{title}</DetailHeader>
                    <Content dangerouslySetInnerHTML={{__html: content}}/>
                </DetailWrapper>
            </div>
        );
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.props.getDetail(this.props.match.params.id);
    }
}

const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
});

const mapDispatch = (dispatch) => ({
    getDetail(id) {
        const action = actionCreators.getDetail(id)
        dispatch(action);
    }
})

export default connect(mapState, mapDispatch)(withRouter(Detail));