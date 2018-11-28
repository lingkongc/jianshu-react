import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    ListItem,
    ListInfo,
    ListMeta
} from '../style';

class List extends Component {
    render() {
        const {list} = this.props;
        return (
            <div>
                {
                    list.map((item) => (
                        <ListItem key={item.get('id')}>
                            <img src={item.get('imgUrl')} alt={item.get('title')}/>
                            <ListInfo>
                                <h3>{item.get('title')}</h3>
                                <p>{item.get('desc')}</p>
                                <ListMeta>
                                    <span>{item.get('nickname')}</span>
                                    <span>{item.get('comment')}</span>
                                    <span>{item.get('yes')}</span>
                                </ListMeta>
                            </ListInfo>
                        </ListItem>
                    ))
                }
            </div>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'articleList'])
});
export default connect(mapState, null)(List);