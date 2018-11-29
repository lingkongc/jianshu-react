import * as actionTypes from "./actionTypes";
import {fromJS} from "immutable";

import a from '../../../statics/banner-s-3.png';
import b from '../../../statics/banner-s-4.png';
import c from '../../../statics/banner-s-5.png';
import d from '../../../statics/banner-s-6.png';
import e from '../../../statics/banner-s-7.png';

// 这里修改state

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    articlePage: 1,
    recommendList: [{
        id: 1,
        imgUrl: a
    }, {
        id: 2,
        imgUrl: b
    }, {
        id: 3,
        imgUrl: c
    }, {
        id: 4,
        imgUrl: d
    }, {
        id: 5,
        imgUrl: e
    },],
    showScroll: false
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList)
            });
        case actionTypes.ADD_ARTICLE_LIST:
            return state.merge({
                articleList: state.get('articleList').concat(action.list),
                articlePage: action.page + 1
            });
        case actionTypes.TOGGLE_SCROLL_SHOW:
            return state.set('showScroll', action.show)
        default:
            return state;
    }
};