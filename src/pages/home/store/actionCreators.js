import axios from 'axios';
import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable';

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            const action = {
                type: actionTypes.CHANGE_HOME_DATA,
                topicList: result.topicList,
                articleList: result.articleList
            };
            dispatch(action);
        })
    };
};

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get(`/api/homeList.json?page=${page}`).then((res) => {
            const result = res.data.data.articleList;
            const action = {
                type: actionTypes.ADD_ARTICLE_LIST,
                list: fromJS(result),
                page: page
            };
            dispatch(action);
        })
    }
}

export const toggleTopShow = (show) => ({
    type: actionTypes.TOGGLE_SCROLL_SHOW,
    show
})