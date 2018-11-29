import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
    ListItem,
    ListInfo,
    ListMeta,
    LoadMore
} from '../style';
import {actionCreators} from '../store/';

class List extends PureComponent {
    render() {
        const {list, getMoreList, page} = this.props;
        return (
            <div>
                {
                    list.map((item) => (
                        <ListItem key={item.get('id')}>
                            <Link to="/detail">
                                <img src={item.get('imgUrl')} alt={item.get('title')}/>
                            </Link>

                            <ListInfo>
                                <Link to="/detail" style={{textDecoration: "none", color: "rgb(70, 70, 70)"}}>
                                    <h3>{item.get('title')}</h3>
                                    <p>{item.get('desc')}</p>
                                </Link>
                                <ListMeta>
                                    <span>{item.get('nickname')}</span>
                                    <span>{item.get('comment')}</span>
                                    <span>{item.get('yes')}</span>
                                </ListMeta>
                            </ListInfo>
                        </ListItem>
                    ))
                }
                <LoadMore onClick={() => getMoreList(page)}>阅读更多</LoadMore>
            </div>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
});
const mapDispatch = dispatch => ({
    getMoreList(page) {
        dispatch(actionCreators.getMoreList(page))
    }
})
export default connect(mapState, mapDispatch)(List);