import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  searchFocus: false
});

export default (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    // immutable对象set方法，返回一个新对象
    return state.set("searchFocus", true);
  }
  if (action.type === actionTypes.SEARCH_BLUR) {
    return state.set("searchFocus", false);
  }
  return state;
};
