import axios from 'axios';
import * as actionTypes from './actionTypes';

// 其实这些都是高阶组件
export const changeDetail = (title, content) => ({
    type: actionTypes.CHNAGE_DETAIL,
    title,
    content
})

export const getDetail = (id) => {
    return (dispatch) => {
        axios.get(`/api/detail.json?id=${id}`)
            .then((res) => {
                const result = res.data.data;
                // 派发action
                dispatch(changeDetail(result.title, result.content))
            })
    }
}