import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

// 这里修改state

const defaultState = fromJS({
  searchFocus: false,
  list: []
});

export default (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    // immutable对象set方法，返回一个新对象
    return state.set("searchFocus", true);
  }
  if (action.type === actionTypes.SEARCH_BLUR) {
    return state.set("searchFocus", false);
  }
  if (action.type === actionTypes.CHANGE_LIST) {
    return state.set('list',action.data)
  }
  return state;
};
