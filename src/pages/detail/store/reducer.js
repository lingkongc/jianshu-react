import {fromJS} from 'immutable';
import * as actionTypes from './actionTypes';

const defautlState = fromJS({
    title: '',
    content: ''
});

export default (state = defautlState, action) => {
    switch (action.type) {
        case actionTypes.CHNAGE_DETAIL:
            return state.merge({
                title: action.title,
                content: action.content
            })
        default:
            return state;
    }
}