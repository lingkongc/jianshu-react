import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {
    TopicWrapper,
    TopicItem,
} from '../style';

class Topic extends PureComponent {
    render() {
        const {list} = this.props;
        return (
            <div>
                <TopicWrapper>
                    {
                        list.map((item) => (
                            <TopicItem key={item.get('id')}>
                                <img src={item.get('imgUrl')} alt={item.get('title')}/>{item.get('title')}
                            </TopicItem>
                        ))
                    }

                </TopicWrapper>
            </div>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'topicList'])
});


export default connect(mapState, null)(Topic);